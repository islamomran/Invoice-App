package com.invoiceapp.service;

import com.invoiceapp.model.InvoiceReportMaster;
import org.camunda.bpm.engine.delegate.DelegateExecution;
import org.camunda.bpm.engine.delegate.JavaDelegate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.LinkedHashMap;
import java.util.List;

@Service
public class ChildProcessService implements JavaDelegate {

    private CamundaService camundaService;
    InvoiceReportService invoiceReportService;

    @Autowired
    public ChildProcessService(CamundaService camundaService, InvoiceReportService invoiceReportService){
        this.camundaService = camundaService;
        this.invoiceReportService = invoiceReportService;
    }

    @Override
    public void execute(DelegateExecution delegateExecution) {
        DelegateExecution processInstance = delegateExecution.getProcessInstance();
        //String businessKey =  (String)processInstance.getVariable("invoiceId");
        LinkedHashMap<String, String> intermediateData = (LinkedHashMap<String, String>)processInstance.getVariable("intermediateData");
        String businessKey = intermediateData.get("invoiceNumber");
        Date invoiceRecievingDate =  (Date)processInstance.getVariable("invoiceRecievringDate");
        List<String> imageUrls = (List<String>)processInstance.getVariable("imageUrls");
        camundaService.editInstanceStatusAndAcknowledgement(businessKey, "approved",
                "acknowledge", true, invoiceRecievingDate, imageUrls);
        InvoiceReportMaster invoiceReportMaster = new InvoiceReportMaster();
        invoiceReportMaster.setRecievingDate(invoiceRecievingDate);
        invoiceReportMaster.setAmount(1554.0);
        invoiceReportMaster.setImageLocation((ArrayList<String>) imageUrls);
        invoiceReportService.createInvoiceReport(invoiceReportMaster);

    }
}
