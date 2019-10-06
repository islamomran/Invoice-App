package com.invoiceapp.service;

import com.invoiceapp.model.BarcodeModel;
import com.invoiceapp.model.InvoiceModel;
import io.tus.java.client.*;
import org.apache.ibatis.javassist.tools.web.BadHttpRequest;
import org.camunda.bpm.engine.RuntimeService;
import org.camunda.bpm.engine.delegate.BpmnError;
import org.camunda.bpm.engine.delegate.DelegateExecution;
import org.camunda.bpm.engine.delegate.JavaDelegate;
import org.camunda.bpm.engine.variable.Variables;
import org.camunda.bpm.engine.variable.value.ObjectValue;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.HttpStatusCodeException;
import org.springframework.web.client.RestTemplate;

import java.io.*;
import java.net.URL;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class InvoiceService implements JavaDelegate {

    CamundaService camundaService;

    @Autowired
    public void InvoiceService(CamundaService camundaService){
        this.camundaService = camundaService;
    }

    public String instantiateInvoiceInstance(InvoiceModel invoiceModel){
        return camundaService.createInvoiceInstance(invoiceModel);
    }

    @Override
    public void execute(DelegateExecution delegateExecution) {
        File file;
        BarcodeModel barcodeModel;
        try {
            List<String> imageUrls = (List<String>)delegateExecution.getVariable("imageUrls");
            file = this.fetchImages(imageUrls.get(0));
            barcodeModel = this.scanImages(file);
            imageUrls.set(0, this.uploadScannedImage(barcodeModel.getImages().get(0)));
            JSONObject barCodeJSON = new JSONObject(barcodeModel.getBarCode());
            String invoiceId = barCodeJSON.getString("id");
            delegateExecution.setVariable("invoiceId", invoiceId);
            if(imageUrls != null){
                ObjectValue images = Variables.objectValue(imageUrls)
                        .serializationDataFormat("application/json").create();
                delegateExecution.setVariable("imageUrls", images);
            }
        }catch (IOException ex){
            throw new BpmnError("error in executing script task : can't download the invoice image");
        }catch (BadHttpRequest ex){
            throw new BpmnError("error in executing script task : Unable to decode barcode");
        }
    }

    public File fetchImages(String imageUrl) throws IOException {
        File file;
        int i=0;
            URL url = new URL(imageUrl);
            InputStream is = url.openStream();
            file = new File("image"+ i +".jpg");
            OutputStream os = new FileOutputStream(file);
            byte[] b = new byte[4096];
            int length;
            while ((length = is.read(b)) != -1) {
                os.write(b, 0, length);
            }
            is.close();
            os.close();
        return file;
    }

    public BarcodeModel scanImages(File file) throws IOException, BadHttpRequest {
        FileSystemResource fsr = new FileSystemResource(file);
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.MULTIPART_FORM_DATA);
        MultiValueMap<String, Object> body
                = new LinkedMultiValueMap<>();
        body.add("file", fsr);
        HttpEntity<MultiValueMap<String, Object>> requestEntity
                = new HttpEntity<>(body, headers);
        String serverUrl = "http://decode.invoice.arungas.com/decode/?";

        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<byte[]> response = null;
        try {
            response = restTemplate
                    .postForEntity(serverUrl, requestEntity, byte[].class);
        }catch (HttpStatusCodeException ex) {
            if (ex.getStatusCode() == HttpStatus.BAD_REQUEST) {
                throw new BadHttpRequest();
            }
        }
        String barcode = response.getHeaders().get("X-Barcode").get(0);
        OutputStream os = new FileOutputStream("image.jpg");
        os.write(response.getBody());
        os.close();
        BarcodeModel barcodeModel = new BarcodeModel();
        barcodeModel.setBarCode(barcode);
        List<File> images = new ArrayList<>();
        images.add(new File("image.jpg"));
        barcodeModel.setImages(images);
        return barcodeModel;
    }

    public String uploadScannedImage(File file) {
        String imageURL = "";
        try {
            // When Java's HTTP client follows a redirect for a POST request, it will change the
            // method from POST to GET which can be disabled using following system property.
            // If you do not enable strict redirects, the tus-java-client will not follow any
            // redirects but still work correctly.
            System.setProperty("http.strictPostRedirect", "true");

            // Create a new TusClient instance
            final TusClient client = new TusClient();

            // Configure tus HTTP endpoint. This URL will be used for creating new uploads
            // using the Creation extension
            client.setUploadCreationURL(new URL("http://tusd.invoice.arungas.com/files/"));

            // Enable resumable uploads by storing the upload URL in memory
            client.enableResuming(new TusURLMemoryStore());

            // Open a file using which we will then create a TusUpload. If you do not have
            // a File object, you can manually construct a TusUpload using an InputStream.
            // See the documentation for more information.
            final TusUpload upload = new TusUpload(file);


            // You can also upload from an InputStream directly using a bit more work:
            // InputStream stream = …;
            // TusUpload upload = new TusUpload();
            // upload.setInputStream(stream);
            // upload.setSize(sizeOfStream);
            // upload.setFingerprint("stream");

            System.out.println("Starting upload...");
            // We wrap our uploading code in the TusExecutor class which will automatically catch
            // exceptions and issue retries with small delays between them and take fully
            // advantage of tus' resumability to offer more reliability.
            // This step is optional but highly recommended.
            TusExecutor executor = new TusExecutor() {

                @Override
                protected void makeAttempt() throws ProtocolException, IOException {
                    // First try to resume an upload. If that's not possible we will create a new
                    // upload and get a TusUploader in return. This class is responsible for opening
                    // a connection to the remote server and doing the uploading.
                    TusUploader uploader = client.resumeOrCreateUpload(upload);

                    // Upload the file in chunks of 1MB sizes.
                    uploader.setChunkSize(1024 * 1024);

                    // Upload the file as long as data is available. Once the
                    // file has been fully uploaded the method will return -1
                    do {
                        // Calculate the progress using the total size of the uploading file and
                        // the current offset.
                        long totalBytes = upload.getSize();
                        long bytesUploaded = uploader.getOffset();
                        double progress = (double) bytesUploaded / totalBytes * 100;

                        System.out.printf("Upload at %06.2f%%.\n", progress);
                    } while(uploader.uploadChunk() > -1);

                    // Allow the HTTP connection to be closed and cleaned up
                    uploader.finish();

                    System.out.println("Upload finished.");
                    System.out.format("Upload available at: %s", uploader.getUploadURL().toString());

                }
            };
            executor.makeAttempts();
            imageURL = client.getUrlStore().get(upload.getFingerprint()).toString();
        } catch(Exception e) {
            e.printStackTrace();
        }
        return  imageURL;
    }

    public void persistLatestStatus(String invoiceNum, String processInstanceId){
        camundaService.persistLatestStatus(invoiceNum, processInstanceId);
    }
}
