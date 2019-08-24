package com.invoiceapp.model;

import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

public class InvoiceModel {

    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    private Date invoiceDate;
    private String imageUrl;

    public void setInvoiceDate(Date invoiceDate){
        this.invoiceDate = invoiceDate;
    }

    public Date getInvoiceDate(){
        return this.invoiceDate;
    }

    public void setImageUrl(String imageUrl){
        this.imageUrl = imageUrl;
    }

    public String getImageUrl(){
        return this.imageUrl;
    }


}
