package com.invoiceapp.controller;

import com.invoiceapp.model.InvoiceModel;
import com.invoiceapp.model.InvoiceReportJSON;
import com.invoiceapp.model.LatestStatus;
import com.invoiceapp.service.InvoiceReportService;
import com.invoiceapp.service.InvoiceService;
import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.repo.InputStreamResource;
import org.keycloak.adapters.springsecurity.token.KeycloakAuthenticationToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.ws.rs.Produces;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.security.Principal;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/invoice")
public class InvoiceController {

    InvoiceService invoiceService;

    InvoiceReportService invoiceReportService;
    @Autowired
    public void InvoiceController(InvoiceService invoiceService, InvoiceReportService invoiceReportService){
        this.invoiceService = invoiceService;
        this.invoiceReportService = invoiceReportService;
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
    public LatestStatus persistLatestStatus(@RequestParam String invoiceNum, @RequestParam String processInstanceId){
        return invoiceService.persistLatestStatus(invoiceNum, processInstanceId);
    }

    @PostMapping(value = "generate-report", produces=MediaType.APPLICATION_PDF_VALUE)
    public ResponseEntity<byte[]> getInvoicesReport(@RequestBody InvoiceReportJSON invoiceReportJSON) throws JRException {
        byte[] invoiceReport = invoiceReportService.generateReport(invoiceReportJSON.getInvoices());
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Disposition", "inline; filename=invoiceReport.pdf");
        return ResponseEntity
                .ok()
                .headers(headers)
                .body(invoiceReport);
    }
}
