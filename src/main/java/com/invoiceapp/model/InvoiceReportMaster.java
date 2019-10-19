package com.invoiceapp.model;

import javax.persistence.*;
import java.util.*;

@Entity
public class InvoiceReportMaster {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String invoiceNO;
    private Date recievingDate;
    private double amount;
    @ElementCollection()
    @CollectionTable(name = "image_locations")
    private List<String> imageLocation;

    public InvoiceReportMaster(){}

    public InvoiceReportMaster(String invoiceNO, Date recievingDate, Double amount) {
        this.invoiceNO = invoiceNO;
        this.recievingDate = recievingDate;
        this.amount = amount;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getInvoiceNO() {
        return invoiceNO;
    }

    public void setInvoiceNO(String invoiceNO) {
        this.invoiceNO = invoiceNO;
    }

    public Date getRecievingDate() {
        return recievingDate;
    }

    public void setRecievingDate(Date recievingDate) {
        this.recievingDate = recievingDate;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public List<String> getImageLocation() {
        return imageLocation;
    }

    public void setImageLocation(List<String> imageLocation) {
        this.imageLocation = imageLocation;
    }
}
