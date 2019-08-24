package com.invoiceapp.model;

import com.invoiceapp.repository.StateDAO;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "latest_status")
public class StateModel {
    @Id
    @Column(unique = true ,length = 100)
    private String businessKey;
    private String status;

    public StateModel(){}

    public StateModel(String businessKey, String status){
        this.businessKey = businessKey;
        this.status = status;
    }

    public String getBusinessKey() {
        return businessKey;
    }

    public void setBusinessKey(String businessKey) {
        this.businessKey = businessKey;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
