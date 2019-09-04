package com.invoiceapp.service;

import org.camunda.bpm.engine.RuntimeService;
import org.camunda.bpm.engine.delegate.DelegateExecution;
import org.camunda.bpm.engine.delegate.ExecutionListener;
import org.camunda.bpm.engine.runtime.ProcessInstance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;


@Component
public class BeforeReviewListener implements ExecutionListener {
    private RuntimeService runtimeService;

    @Autowired
    public BeforeReviewListener(RuntimeService runtimeService){
        this.runtimeService = runtimeService;
    }
    @Override
    public void notify(DelegateExecution delegateExecution) {
        String businessKey = (String)delegateExecution.getVariable("invoiceId");
        ProcessInstance processInstance = runtimeService.createProcessInstanceQuery().processInstanceBusinessKey(businessKey).singleResult();
        String status = (String)runtimeService.getVariable(processInstance.getId(), "status");
        boolean isAmended = (boolean)runtimeService.getVariable(processInstance.getId(), "isAmended");
        delegateExecution.setVariable("status", status);
        delegateExecution.setVariable("isAmended", isAmended);
        if(status.equalsIgnoreCase("approved")){
            List<String> imageUrls = (List<String>)runtimeService.getVariable(processInstance.getId(), "imageUrls");
            delegateExecution.setVariable("previousAcknowledgement", imageUrls);
        }
    }

}
