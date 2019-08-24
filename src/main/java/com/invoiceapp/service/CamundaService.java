package com.invoiceapp.service;

import com.invoiceapp.model.InvoiceModel;
import org.camunda.bpm.engine.ProcessEngine;
import org.camunda.bpm.engine.ProcessEngineConfiguration;
import org.camunda.bpm.engine.RepositoryService;
import org.camunda.bpm.engine.RuntimeService;
import org.camunda.bpm.engine.repository.ProcessDefinition;
import org.camunda.bpm.engine.runtime.Execution;
import org.camunda.bpm.engine.runtime.MessageCorrelationBuilder;
import org.camunda.bpm.engine.runtime.MessageCorrelationResult;
import org.camunda.bpm.engine.runtime.ProcessInstance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class CamundaService {

    private ProcessEngine processEngine;
    private RuntimeService runtimeService;

    @Autowired
    public CamundaService(RuntimeService runtimeService){
        this.runtimeService = runtimeService;
    }

    public String createInvoiceInstance(InvoiceModel invoiceModel){
        Map<String, Object> processVars = new HashMap<>();
        processVars.put("invoiceRecievringDate", invoiceModel.getInvoiceDate());
        processVars.put("imageUrl", invoiceModel.getImageUrl());
        ProcessInstance processInstance = runtimeService.startProcessInstanceByKey("Invoice_Scan_Process", processVars);
        return processInstance.getId();
    }

    public String createStateInstance(String invoiceNum){
        Map<String, Object> processVars = new HashMap<>();
        processVars.put("status", "Acknowledgement Pending");
        processVars.put("is_acknowlodged", false);
        ProcessInstance processInstance = runtimeService.startProcessInstanceByKey("Invoice_overall_state" , invoiceNum, processVars);
        return processInstance.getId();
    }

    public String editInstanceStatus(String invoiceNum, String status, String messageName){
        runtimeService.createMessageCorrelation(messageName)
                .processInstanceBusinessKey(invoiceNum)
                .setVariable("status", status)
                .correlateWithResult();
        return status;
    }

    public String editInstanceStatusAndAcknowledgement(String invoiceNum, String status, String messageName, boolean isAcknowleged){
        runtimeService.createMessageCorrelation(messageName)
                .processInstanceBusinessKey(invoiceNum)
                .setVariable("status", status)
                .setVariable("is_acknowlodged", isAcknowleged)
                .correlateWithResult();
        return status;
    }

    public String editInstanceStatusAndAcknowledgement(String invoiceNum, String status, String messageName, boolean isAcknowleged, Date recievingDate){
        runtimeService.createMessageCorrelation(messageName)
                .processInstanceBusinessKey(invoiceNum)
                .setVariable("status", status)
                .setVariable("is_acknowlodged", isAcknowleged)
                .setVariable("invoiceRecievringDate", recievingDate)
                .correlateWithResult();
        return status;
    }

    public void archiveAll(Date date){
        List<Execution> executions = runtimeService.createExecutionQuery()
                .variableValueLessThanOrEqual("invoiceRecievringDate", date)
                .variableValueEquals("status", "approved")
                .list();
        for(Execution execution: executions){
            ProcessInstance instance = (ProcessInstance) execution;
            runtimeService.createMessageCorrelation("archive")
                    .processInstanceBusinessKey(instance.getBusinessKey())
                    .setVariable("status", "archived")
                    .correlateWithResult();
        }
    }

}
