package com.invoiceapp.model;

import java.io.File;
import java.util.List;

public class BarcodeModel {
    private String barCode;
    private List<File> images;

    public String getBarCode() {
        return barCode;
    }

    public void setBarCode(String barCode) {
        this.barCode = barCode;
    }

    public List<File> getImages() {
        return images;
    }

    public void setImages(List<File> images) {
        this.images = images;
    }
}
