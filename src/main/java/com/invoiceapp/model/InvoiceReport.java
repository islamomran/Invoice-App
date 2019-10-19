package com.invoiceapp.model;

import java.io.File;
import java.util.Date;
import java.util.List;

public class InvoiceReport {
    private String SR;
    private Date invoiceDate;
    private String invoiceNO;
    private Date recievingDate;
    private double amount;
    private long runingTotal;
    private List<File> files;


    public InvoiceReport(String SR, Date invoiceDate, String invoiceNO, Date recievingDate, Double amount, long runingTotal, List<File> files) {
        this.SR = SR;
        this.invoiceDate = invoiceDate;
        this.invoiceNO = invoiceNO;
        this.recievingDate = recievingDate;
        this.amount = amount;
        this.runingTotal = runingTotal;
        this.files = files;
    }

    public String getSR() {
        return SR;
    }

    public void setSR(String SR) {
        this.SR = SR;
    }

    public Date getInvoiceDate() {
        return invoiceDate;
    }

    public void setInvoiceDate(Date invoiceDate) {
        this.invoiceDate = invoiceDate;
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

    public long getRuningTotal() {
        return runingTotal;
    }

    public void setRuningTotal(long runingTotal) {
        this.runingTotal = runingTotal;
    }

    public List<File> getFile() {
        return files;
    }

    public void setFile(List<File> files) {
        this.files = files;
    }


}
