package com.invoiceapp.model;

public class InvoiceModel {
    private String invoiceDate;
    private String imageUrl;

    public void setInvoiceDate(String invoiceDate){
        this.invoiceDate = invoiceDate;
    }

    public String getInvoiceDate(){
        return this.invoiceDate;
    }

    public void setImageUrl(String imageUrl){
        this.imageUrl = imageUrl;
    }

    public String getImageUrl(){
        return this.imageUrl;
    }


}
