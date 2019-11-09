package com.invoiceapp.model;

import javax.persistence.*;

@Entity
public class ImageLocation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String locationUrl;

    @ManyToOne()
    @JoinColumn(name="invoiceNO", nullable=false)
    private InvoiceReportMaster invoiceReportMaster;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        id = id;
    }

    public String getLocationUrl() {
        return locationUrl;
    }

    public void setLocationUrl(String locationUrl) {
        this.locationUrl = locationUrl;
    }

    public InvoiceReportMaster getInvoiceReportMaster() {
        return invoiceReportMaster;
    }

    public void setInvoiceReportMaster(InvoiceReportMaster invoiceReportMaster) {
        this.invoiceReportMaster = invoiceReportMaster;
    }
}
