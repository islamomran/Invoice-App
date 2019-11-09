package com.invoiceapp.repository;

import com.invoiceapp.model.InvoiceReportMaster;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface InvoiceReportMasterDAO extends CrudRepository<InvoiceReportMaster, String> {
    public List<InvoiceReportMaster> findByInvoiceNOIn(List<String> invoices);
}
