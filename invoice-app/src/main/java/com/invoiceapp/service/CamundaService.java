package com.invoiceapp.service;

import com.invoiceapp.model.InvoiceModel;
import org.camunda.bpm.engine.ProcessEngine;
import org.camunda.bpm.engine.ProcessEngineConfiguration;
import org.camunda.bpm.engine.RepositoryService;
import org.camunda.bpm.engine.RuntimeService;
import org.camunda.bpm.engine.repository.ProcessDefinition;
import org.camunda.bpm.engine.runtime.ProcessInstance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class CamundaService {

    private ProcessEngine processEngine;

    public CamundaService(){
         processEngine = ProcessEngineConfiguration.createStandaloneProcessEngineConfiguration()
                 .setJdbcDriver("com.mysql.cj.jdbc.Driver")
                 .setJdbcUrl("jdbc:mysql://localhost:3306/camunda")
                 .setDatabaseSchemaUpdate("true")
                 .setJdbcUsername("root")
                 .setJdbcPassword("")
                 .buildProcessEngine();
    }

    public String createInvoiceInstance(InvoiceModel invoiceModel){
        Map<String, Object> processVars = new HashMap<>();
        processVars.put("invoiceRecievingDate", invoiceModel.getInvoiceDate());
        processVars.put("imageUrl", invoiceModel.getImageUrl());
        RuntimeService runtimeService = processEngine.getRuntimeService();
        ProcessInstance processInstance = runtimeService.startProcessInstanceByKey("Invoice_Scan_Process", processVars);
        return processInstance.getId();
    }


}
