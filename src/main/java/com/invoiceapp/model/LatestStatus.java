package com.invoiceapp.model;

public class LatestStatus {

    private String status;
    private boolean isManuallyEntered;
    private boolean isAmended;

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public boolean isManuallyEntered() {
        return isManuallyEntered;
    }

    public void setManuallyEntered(boolean manuallyEntered) {
        isManuallyEntered = manuallyEntered;
    }

    public boolean isAmended() {
        return isAmended;
    }

    public void setAmended(boolean amended) {
        isAmended = amended;
    }
}

