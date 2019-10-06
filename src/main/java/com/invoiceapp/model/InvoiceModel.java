package com.invoiceapp.model;

import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;
import java.util.List;

public class InvoiceModel {

    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    private Date invoiceDate;
    private List<String> imageUrls;
    private String creator;
    private String creatorEmail;
    private String creatorId;

    public void setInvoiceDate(Date invoiceDate){
        this.invoiceDate = invoiceDate;
    }

    public Date getInvoiceDate(){
        return this.invoiceDate;
    }

    public void setImageUrls(List<String> imageUrl){
        this.imageUrls = imageUrl;
    }

    public List<String> getImageUrls(){
        return this.imageUrls;
    }

    public String getCreator() {
        return creator;
    }

    public void setCreator(String creator) {
        this.creator = creator;
    }

    public String getCreatorEmail() {
        return creatorEmail;
    }

    public void setCreatorEmail(String creatorEmail) {
        this.creatorEmail = creatorEmail;
    }

    public String getCreatorId() {
        return creatorId;
    }

    public void setCreatorId(String creatorId) {
        this.creatorId = creatorId;
    }
}
