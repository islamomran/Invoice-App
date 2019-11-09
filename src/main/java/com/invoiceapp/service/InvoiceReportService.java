package com.invoiceapp.service;

import com.invoiceapp.model.InvoiceReportMaster;
import com.invoiceapp.repository.InvoiceReportMasterDAO;
import net.sf.jasperreports.engine.*;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class InvoiceReportService {

    private InvoiceReportMasterDAO invoiceReportMasterDAO;

    @Autowired
    public InvoiceReportService(InvoiceReportMasterDAO invoiceReportMasterDAO){
        this.invoiceReportMasterDAO = invoiceReportMasterDAO;
    }

    public void saveInvoiceReport(InvoiceReportMaster invoiceReportMaster){
        invoiceReportMasterDAO.save(invoiceReportMaster);
    }

    public byte[] generateReport(List<String> invoices) throws JRException {

        List<InvoiceReportMaster> reportList = invoiceReportMasterDAO.findByInvoiceNOIn(invoices);
        try {


            String reportPath = "D:\\Content\\Report";

            // Compile the Jasper report from .jrxml to .japser
            JasperReport jasperReport = JasperCompileManager.compileReport(reportPath + "\\employee-rpt.jrxml");

            // Get your data source
            JRBeanCollectionDataSource itemsJRBean = new JRBeanCollectionDataSource(reportList);
            JRBeanCollectionDataSource itemsJRBean2 = new JRBeanCollectionDataSource(reportList);

            // Add parameters
            Map<String, Object> parameters = new HashMap<>();
            parameters.put("ItemDataSource", itemsJRBean);

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
