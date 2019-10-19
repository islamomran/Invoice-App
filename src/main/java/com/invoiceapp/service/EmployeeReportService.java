package com.invoiceapp.service;

import com.invoiceapp.model.InvoiceReport;
import net.sf.jasperreports.engine.*;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;
import org.springframework.stereotype.Service;

import java.io.File;
import java.util.*;

@Service
public class EmployeeReportService {
    List<File> files = Arrays.asList(new File("image.jpg"), new File("image0.jpg"));

    private List<InvoiceReport> empList = Arrays.asList(
            new InvoiceReport("1", new Date(),"Sandeep", new Date(), 54.0,54, files),
            new InvoiceReport("2", new Date(),"Prince", new Date(), 54.0,40000,files),
            new InvoiceReport("3", new Date(),"Gaurav", new Date(), 54.0,47000, files),
            new InvoiceReport("4", new Date(),"Abhinav", new Date(), 45.0,700000, files));

    private List<InvoiceReport> empList2 = Arrays.asList(
            new InvoiceReport("1", new Date(),"Sandeep", new Date(), 54.0,54, files),
            new InvoiceReport("2", new Date(),"Prince", new Date(), 54.0,40000,files),
            new InvoiceReport("3", new Date(),"Gaurav", new Date(), 54.0,47000, files),
            new InvoiceReport("4", new Date(),"Abhinav", new Date(), 45.0,700000, files));

    public String generateReport() {
        try {

            String reportPath = "D:\\Content\\Report";

            // Compile the Jasper report from .jrxml to .japser
            JasperReport jasperReport = JasperCompileManager.compileReport(reportPath + "\\employee-rpt.jrxml");

            // Get your data source
            JRBeanCollectionDataSource itemsJRBean = new JRBeanCollectionDataSource(empList);
            JRBeanCollectionDataSource itemsJRBean2 = new JRBeanCollectionDataSource(empList2);

            // Add parameters
            Map<String, Object> parameters = new HashMap<>();
            parameters.put("ItemDataSource", itemsJRBean);
            parameters.put("Item2DataSource", itemsJRBean2);

            // Fill the report
            JasperPrint jasperPrint = JasperFillManager.fillReport(jasperReport, parameters, itemsJRBean2);

            // Export the report to a PDF file
            JasperExportManager.exportReportToPdfFile(jasperPrint, reportPath + "\\Emp-Rpt.pdf");

            System.out.println("Done");

            return "Report successfully generated @path= " + reportPath;

        } catch (Exception e) {
            e.printStackTrace();
            return e.getMessage();
        }
    }
}
