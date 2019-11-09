package com.invoiceapp.model;

import org.hibernate.validator.constraints.Length;

import javax.persistence.*;
import java.util.*;

@Entity
public class InvoiceReportMaster {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(length = 100)
    private String invoiceNO;
    private Date recievingDate;
    private double amount;
    @OneToMany(mappedBy = "invoiceReportMaster",fetch = FetchType.EAGER, cascade = CascadeType.PERSIST)
    private List<ImageLocation> imageLocation;

    @Transient
    private String imageUrl;

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

    public List<ImageLocation> getImageLocation() {
        return imageLocation;
    }

    public void setImageLocation(List<ImageLocation> imageLocation) {
        this.imageLocation = imageLocation;
    }


    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
}
