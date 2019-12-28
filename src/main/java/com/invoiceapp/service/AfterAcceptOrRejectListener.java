package com.invoiceapp.service;

import org.camunda.bpm.engine.delegate.DelegateExecution;
import org.camunda.bpm.engine.delegate.ExecutionListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.LinkedHashMap;

@Component
public class AfterAcceptOrRejectListener implements ExecutionListener {

    private StateService stateService;

    @Autowired
    public AfterAcceptOrRejectListener(StateService stateService){
        this.stateService = stateService;
    }

    @Override
    public void notify(DelegateExecution delegateExecution){
        String approval = (String)delegateExecution.getVariable("approval");
        if(approval.equalsIgnoreCase("accept")){
            LinkedHashMap<String, String> intermediateData = (LinkedHashMap<String, String>)delegateExecution.getVariable("intermediateData");
            String businessKey = intermediateData.get("invoiceNumber");
            this.stateService.editInstanceStatusAndAcknowledgement(businessKey, "Acknowledge Pending", "rejectPrevious", false);
        }
    }
}
