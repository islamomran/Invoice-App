package com.invoiceapp.model;

import java.io.File;

public class BarcodeModel {
    private String barCode;
    private File scannedImage;

    public String getBarCode() {
        return barCode;
    }

    public void setBarCode(String barCode) {
        this.barCode = barCode;
    }

    public File getScannedImage() {
        return scannedImage;
    }

    public void setScannedImage(File scannedImage) {
        this.scannedImage = scannedImage;
    }
}
