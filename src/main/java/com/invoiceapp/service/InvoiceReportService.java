package com.invoiceapp.service;

import com.invoiceapp.model.ImageLocation;
import com.invoiceapp.model.InvoiceReportMaster;
import com.invoiceapp.repository.InvoiceReportMasterDAO;
import net.sf.jasperreports.engine.*;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.io.Serializable;
import java.util.*;

@Service
public class InvoiceReportService implements Serializable {

    private InvoiceReportMasterDAO invoiceReportMasterDAO;
    @Autowired
    ResourceLoader resourceLoader;

    @Autowired
    public InvoiceReportService(InvoiceReportMasterDAO invoiceReportMasterDAO){
        this.invoiceReportMasterDAO = invoiceReportMasterDAO;
    }

    public void saveInvoiceReport(InvoiceReportMaster invoiceReportMaster){
        invoiceReportMasterDAO.save(invoiceReportMaster);
    }

    public byte[]   generateReport(List<String> invoices) throws JRException, IOException {

        List<InvoiceReportMaster> reportList = invoiceReportMasterDAO.findByInvoiceNOIn(invoices);
        List<InvoiceReportMaster> reportList2 = new ArrayList<>();
        reportList2.add(reportList.get(0));

        try {

            Resource resource = resourceLoader.getResource("classpath:employee-rpt.jrxml");
            // Compile the Jasper report from .jrxml to .japser
            JasperReport jasperReport = JasperCompileManager.compileReport(resource.getInputStream());

            // Get your data source

            JRBeanCollectionDataSource itemsJRBean = new JRBeanCollectionDataSource(reportList);

            int pageNum = 0;
            List<ImageLocation> imgLocations = new ArrayList<>();
            for(InvoiceReportMaster report : reportList){
                pageNum = 0;
                for(ImageLocation imageLocation : report.getImageLocation()){
                    imageLocation.setCount(report.getImageLocation().size());
                    pageNum++;
                    imageLocation.setPageNum(pageNum);
                    imgLocations.add(imageLocation);
                }
            }

            JRBeanCollectionDataSource itemsJRBean2 = new JRBeanCollectionDataSource(reportList2);
            JRBeanCollectionDataSource itemsJRBean3 = new JRBeanCollectionDataSource(imgLocations);

            // Add parameters
            Map<String, Object> parameters = new HashMap<>();
            parameters.put("ItemDataSource", itemsJRBean);
            parameters.put("ImageDataSource", itemsJRBean3);

            // Fill the report
            JasperPrint jasperPrint = JasperFillManager.fillReport(jasperReport, parameters, itemsJRBean2);

            // Export the report to a PDF file
            return JasperExportManager.exportReportToPdf(jasperPrint);

        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }
}
