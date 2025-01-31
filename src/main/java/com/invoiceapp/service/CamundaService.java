package com.invoiceapp.service;

import com.invoiceapp.model.InvoiceModel;
import com.invoiceapp.model.LatestStatus;
import org.camunda.bpm.engine.ProcessEngine;
import org.camunda.bpm.engine.RuntimeService;
import org.camunda.bpm.engine.delegate.BpmnError;
import org.camunda.bpm.engine.runtime.Execution;
import org.camunda.bpm.engine.runtime.ProcessInstance;
import org.camunda.bpm.engine.variable.Variables;
import org.camunda.bpm.engine.variable.value.ObjectValue;
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
        if(invoiceModel.getImageUrls() == null){
            throw new RuntimeException("No invoice get uploaded");
        }
        Map<String, Object> processVars = new HashMap<>();
        processVars.put("invoiceRecievringDate", invoiceModel.getInvoiceDate());
        processVars.put("creator", invoiceModel.getCreator());
        processVars.put("creatorId", invoiceModel.getCreatorId());
        processVars.put("creatorEmail", invoiceModel.getCreatorEmail());
        processVars.put("manually entered", false);
        ObjectValue imageUrls = Variables.objectValue(invoiceModel.getImageUrls())
                .serializationDataFormat("application/json").create();
        processVars.put("imageUrls", imageUrls);
        ProcessInstance processInstance = runtimeService.startProcessInstanceByKey("Invoice_Scan_Process", processVars);
        return processInstance.getId();
    }

    public String createStateInstance(String invoiceNum){
        Map<String, Object> processVars = new HashMap<>();
        processVars.put("status", "Acknowledgement Pending");
        processVars.put("is_acknowlodged", false);
        processVars.put("isAmended", false);
        ProcessInstance processInstance = runtimeService.startProcessInstanceByKey("Invoice_overall_state" , invoiceNum, processVars);
        return processInstance.getId();
    }

    public String editInstanceStatus(String invoiceNum, String status, String messageName, boolean isAmended){
        runtimeService.createMessageCorrelation(messageName)
                .processInstanceBusinessKey(invoiceNum)
                .setVariable("status", status)
                .setVariable("isAmended", isAmended)
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

    public String editInstanceStatusAndAcknowledgement(String invoiceNum, String status, String messageName,
                                                       boolean isAcknowleged, Date recievingDate, List<String> imageUrls){
        ObjectValue images = Variables.objectValue(imageUrls)
                .serializationDataFormat("application/json").create();
        runtimeService.createMessageCorrelation(messageName)
                .processInstanceBusinessKey(invoiceNum)
                .setVariable("status", status)
                .setVariable("is_acknowlodged", isAcknowleged)
                .setVariable("invoiceRecievringDate", recievingDate)
                .setVariable("imageUrls", images)
                .correlateWithResult();
        return status;
    }

    public void archiveAll(Date date){
        List<ProcessInstance> executions = runtimeService.createProcessInstanceQuery()
                .variableValueLessThanOrEqual("invoiceRecievringDate", date)
                .variableValueEquals("status", "approved")
                .variableValueEquals("status", "cancelled")
                .list();
        for(Execution execution: executions){
            ProcessInstance instance = (ProcessInstance) execution;
            runtimeService.createMessageCorrelation("archive")
                    .processInstanceBusinessKey(instance.getBusinessKey())
                    .setVariable("status", "archived")
                    .correlateWithResult();
        }
    }

    public void discardAll(Date date){
        List<ProcessInstance> executions = runtimeService.createProcessInstanceQuery()
                .variableValueLessThanOrEqual("invoiceRecievringDate", date)
                .variableValueEquals("status", "cancelled")
                .list();
        for(Execution execution: executions){
            ProcessInstance instance = (ProcessInstance) execution;
            runtimeService.createMessageCorrelation("discard")
                    .processInstanceBusinessKey(instance.getBusinessKey())
                    .setVariable("status", "Discarded")
                    .correlateWithResult();
        }
    }

    public LatestStatus persistLatestStatus(String invoiceNum, String processInstanceId){
        ProcessInstance statusProcessInstance = runtimeService.createProcessInstanceQuery().processInstanceBusinessKey(invoiceNum).singleResult();
        String status = (String)runtimeService.getVariable(statusProcessInstance.getId(), "status");
        boolean isAmended = (boolean)runtimeService.getVariable(statusProcessInstance.getId(), "isAmended");
        ProcessInstance InvoiceProcessInstance = runtimeService.createProcessInstanceQuery().processInstanceId(processInstanceId).singleResult();
        runtimeService.setVariable(InvoiceProcessInstance.getId(), "status", status);
        runtimeService.setVariable(InvoiceProcessInstance.getId(), "isAmended", isAmended);
        boolean isManuallyEntered = (boolean) runtimeService.getVariable(InvoiceProcessInstance.getId(), "manually entered");
        if(status.equalsIgnoreCase("approved")){
            List<String> imageUrls = (List<String>)runtimeService.getVariable(statusProcessInstance.getId(), "imageUrls");
            runtimeService.setVariable(InvoiceProcessInstance.getId(), "previousAcknowledgement", imageUrls);
        }
        LatestStatus latestStatus = new LatestStatus();
        latestStatus.setStatus(status);
        latestStatus.setAmended(isAmended);
        latestStatus.setManuallyEntered(isManuallyEntered);
        return latestStatus;
    }

}
