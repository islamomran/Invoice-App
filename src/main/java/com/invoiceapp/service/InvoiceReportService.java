package com.invoiceapp.service;

import com.invoiceapp.model.InvoiceReportMaster;
import com.invoiceapp.repository.InvoiceReportMasterDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class InvoiceReportService {

    private InvoiceReportMasterDAO invoiceReportMasterDAO;

    @Autowired
    public InvoiceReportService(InvoiceReportMasterDAO invoiceReportMasterDAO){
        this.invoiceReportMasterDAO = invoiceReportMasterDAO;
    }

    public void createInvoiceReport(InvoiceReportMaster invoiceReportMaster){
        this.invoiceReportMasterDAO.save(invoiceReportMaster);
    }
}
