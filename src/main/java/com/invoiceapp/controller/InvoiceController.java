package com.invoiceapp.controller;

import com.invoiceapp.model.InvoiceModel;
import com.invoiceapp.service.InvoiceService;
import org.keycloak.KeycloakPrincipal;
import org.keycloak.adapters.jetty.core.AbstractKeycloakJettyAuthenticator;
import org.keycloak.adapters.springsecurity.token.KeycloakAuthenticationToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@RequestMapping("/invoice")
public class InvoiceController {

    InvoiceService invoiceService;
    @Autowired
    public void InvoiceController(InvoiceService invoiceService){
        this.invoiceService = invoiceService;
    }

    @PostMapping
    @CrossOrigin()
    public String submitInvoice(@RequestBody InvoiceModel invoiceModel, Principal principal){
        KeycloakAuthenticationToken kcPrincipal = (KeycloakAuthenticationToken) principal;
        invoiceModel.setCreator(kcPrincipal.getName());
        invoiceModel.setCreatorId(kcPrincipal.getAccount().getKeycloakSecurityContext().getToken().getSubject());
        invoiceModel.setCreatorEmail(kcPrincipal.getAccount().getKeycloakSecurityContext().getToken().getEmail());
        return this.invoiceService.instantiateInvoiceInstance(invoiceModel);
    }

    @PostMapping("/latestStatus")
    @CrossOrigin()
    public void persistLatestStatus(String invoiceNum, String processInstanceId){
        invoiceService.persistLatestStatus(invoiceNum, processInstanceId);
    }
}
