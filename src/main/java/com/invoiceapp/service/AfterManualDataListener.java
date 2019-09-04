package com.invoiceapp.service;

import org.camunda.bpm.engine.delegate.DelegateExecution;
import org.camunda.bpm.engine.delegate.ExecutionListener;
import org.springframework.stereotype.Component;

@Component
public class AfterManualDataListener implements ExecutionListener {
    @Override
    public void notify(DelegateExecution delegateExecution){
        delegateExecution.setVariable("manually entered", true);
    }
}
