package com.invoiceapp.service;

import com.invoiceapp.model.StateModel;
import com.invoiceapp.repository.StateDAO;
import javafx.application.Application;
import org.camunda.bpm.engine.delegate.DelegateExecution;
import org.camunda.bpm.engine.delegate.ExecutionListener;
import org.camunda.bpm.engine.delegate.JavaDelegate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.Date;

@Service
public class StateService implements JavaDelegate, ExecutionListener {

    private CamundaService camundaService;
    private StateDAO stateDAO;

    @Autowired
    public StateService(CamundaService camundaService, StateDAO stateDAO){
        this.camundaService = camundaService;
        this.stateDAO = stateDAO;
    }

    public String inistantiateInstance(String invoiceNum){
        return camundaService.createStateInstance(invoiceNum);
    }

    public String editInstanceStatus(String invoiceNum, String status, String messageName, boolean isAmended){
        return camundaService.editInstanceStatus(invoiceNum, status, messageName, isAmended);
    }

    public String editInstanceStatusAndAcknowledgement(String invoiceNum, String status, String messageName, boolean isAcknowledged){
        return camundaService.editInstanceStatusAndAcknowledgement(invoiceNum, status, messageName, isAcknowledged);
    }

    @Override
    public void execute(DelegateExecution delegateExecution) {
        delegateExecution.getProcessInstance().setVariable("has_invoice_hash_changed", true);
    }

    public void archiveAll(Date date){
        camundaService.archiveAll(date);
    }

    public void discardAll(Date date){
        camundaService.discardAll(date);
    }

    public void persistLatestStatus(String businessKey, String status){
        stateDAO.save(new StateModel(businessKey, status));
    }

    @Override
    public void notify(DelegateExecution delegateExecution){
        persistLatestStatus(delegateExecution.getBusinessKey(), (String)delegateExecution.getVariable("status"));

    }
}
