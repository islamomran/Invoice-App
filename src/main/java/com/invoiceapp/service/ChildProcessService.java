package com.invoiceapp.service;

import org.camunda.bpm.engine.delegate.DelegateExecution;
import org.camunda.bpm.engine.delegate.JavaDelegate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class ChildProcessService implements JavaDelegate {

    private CamundaService camundaService;

    @Autowired
    public ChildProcessService(CamundaService camundaService){
        this.camundaService = camundaService;
    }

    @Override
    public void execute(DelegateExecution delegateExecution) {
        DelegateExecution processInstance = delegateExecution.getProcessInstance();
        String businessKey =  (String)processInstance.getVariable("invoiceId");
        Date invoiceRecievingDate =  (Date)processInstance.getVariable("invoiceRecievringDate");
        List<String> imageUrls = (List<String>)processInstance.getVariable("imageUrls");
        camundaService.editInstanceStatusAndAcknowledgement(businessKey, "approved",
                "acknowledge", true, invoiceRecievingDate, imageUrls);

    }
}
