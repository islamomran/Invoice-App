package com.invoiceapp.service;

import com.invoiceapp.exception.WrongSelectionException;
import org.camunda.bpm.engine.RuntimeService;
import org.camunda.bpm.engine.TaskService;
import org.camunda.bpm.engine.delegate.*;
import org.camunda.bpm.engine.runtime.ProcessInstance;
import org.springframework.stereotype.Component;

import java.util.LinkedHashMap;

@Component
public class AfterReviewListener implements TaskListener {

    private RuntimeService runtimeService;

    public AfterReviewListener(RuntimeService runtimeService){
        this.runtimeService = runtimeService;
    }

    @Override
    public void notify(DelegateTask delegateTask) {
        //String businessKey = (String)delegateTask.getVariable("invoiceId");
        LinkedHashMap<String, String> intermediateData = (LinkedHashMap<String, String>)delegateTask.getVariable("intermediateData");
        String businessKey = intermediateData.get("invoiceNumber");
        ProcessInstance processInstance = runtimeService.createProcessInstanceQuery().processInstanceBusinessKey(businessKey).singleResult();
        String status = (String)runtimeService.getVariable(processInstance.getId(), "status");
        String reviewerApproval = (String)delegateTask.getVariable("reviewerApproval");
        if(status.equalsIgnoreCase(Status.APPROVED) && reviewerApproval.equalsIgnoreCase(ReviewerApproval.APPROVED)){
            throw new WrongSelectionException("Invoice already acknowledged can't be acknowledged again");
        }else if(status.equalsIgnoreCase(Status.ACKNOWLEDGE_PENDING) && reviewerApproval.equalsIgnoreCase(ReviewerApproval.REJECT_REQUEST)){
            throw new WrongSelectionException("There is no previous acknowledge to reject");
        }
    }
}
