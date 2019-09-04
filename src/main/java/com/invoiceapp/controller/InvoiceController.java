package com.invoiceapp.controller;

import com.invoiceapp.model.InvoiceModel;
import com.invoiceapp.service.InvoiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

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
    public String submitInvoice(@RequestBody InvoiceModel invoiceModel){
        return this.invoiceService.instantiateInvoiceInstance(invoiceModel);
    }
}
