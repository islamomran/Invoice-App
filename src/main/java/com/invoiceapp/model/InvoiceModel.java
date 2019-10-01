package com.invoiceapp.model;

import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;
import java.util.List;

public class InvoiceModel {

    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    private Date invoiceDate;
    private List<String> imageUrls;
    private String creator;

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
}
