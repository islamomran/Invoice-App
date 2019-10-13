package com.invoiceapp.service;

import org.camunda.bpm.engine.RuntimeService;
import org.camunda.bpm.engine.delegate.DelegateExecution;
import org.camunda.bpm.engine.delegate.DelegateTask;
import org.camunda.bpm.engine.delegate.ExecutionListener;
import org.camunda.bpm.engine.delegate.TaskListener;
import org.camunda.bpm.engine.runtime.ProcessInstance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.LinkedHashMap;
import java.util.List;


@Component
public class BeforeReviewListener implements TaskListener {
    private RuntimeService runtimeService;

    @Autowired
    public BeforeReviewListener(RuntimeService runtimeService){
        this.runtimeService = runtimeService;
    }

    @Override
    public void notify(DelegateTask delegateTask) {
        LinkedHashMap<String, String> intermediateData = (LinkedHashMap<String, String>)delegateTask.getVariable("intermediateData");
        String businessKey = intermediateData.get("invoiceNumber");
        ProcessInstance processInstance = runtimeService.createProcessInstanceQuery().processInstanceBusinessKey(businessKey).singleResult();
        String status = (String)runtimeService.getVariable(processInstance.getId(), "status");
        boolean isAmended = (boolean)runtimeService.getVariable(processInstance.getId(), "isAmended");
        delegateTask.setVariable("status", status);
        delegateTask.setVariable("isAmended", isAmended);
        if(status.equalsIgnoreCase("approved")){
            List<String> imageUrls = (List<String>)runtimeService.getVariable(processInstance.getId(), "imageUrls");
            delegateTask.setVariable("previousAcknowledgement", imageUrls);
        }
    }
}
