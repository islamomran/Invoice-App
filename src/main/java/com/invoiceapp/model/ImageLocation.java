package com.invoiceapp.model;

import javax.persistence.*;

@Entity
public class ImageLocation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String locationUrl;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="invoiceNO", nullable=false)
    private InvoiceReportMaster invoiceReportMaster;

    @Transient
    private int pageNum;

    @Transient
    private int count;

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

    public int getPageNum() {
        return pageNum;
    }

    public void setPageNum(int pageNum) {
        this.pageNum = pageNum;
    }

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }
}
