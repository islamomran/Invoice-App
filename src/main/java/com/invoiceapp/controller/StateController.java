package com.invoiceapp.controller;

import com.invoiceapp.service.StateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.Calendar;
import java.util.Date;

@RestController
@RequestMapping("/state")
public class StateController {

    StateService stateService;

    @Autowired
    public StateController(StateService stateService){
        this.stateService = stateService;
    }

    @PostMapping("/create")
    public String createInstance(String invoiceNum){
        return this.stateService.inistantiateInstance(invoiceNum);
    }

    @PostMapping("/cancel")
    public String cancelInstance(String invoiceNum){
        return this.stateService.editInstanceStatus(invoiceNum, "cancelled", "cancelPending", false);
    }

    @PostMapping("/approve")
    public String approveInstance(String invoiceNum){
        return this.stateService.editInstanceStatusAndAcknowledgement(invoiceNum, "approved", "acknowledge", true);
    }

    @PostMapping("/archive")
    public String archiveInstance(String invoiceNum){
        return this.stateService.editInstanceStatus(invoiceNum, "archived", "archive", false);
    }

    @PostMapping("/cancelacknowledge")
    public String cancelAcknowledgeInstance(String invoiceNum){
        return this.stateService.editInstanceStatus(invoiceNum, "Cancelled", "cancelAcknowledged", false);
    }

    @PostMapping("/rejectprevious")
    public String rejectPreviousAcknowledgedInstance(String invoiceNum){
        return this.stateService.editInstanceStatusAndAcknowledgement(invoiceNum, "Acknowledge Pending", "rejectPrevious", false);
    }

    @PostMapping("/amend")
    public String amendInstance(String invoiceNum){
        return this.stateService.editInstanceStatus(invoiceNum, "Amended", "edited", true);
    }

    @PostMapping("/discard")
    public String discardInstance(String invoiceNum){
        return this.stateService.editInstanceStatus(invoiceNum, "Discarded", "discard", false);
    }

    @PostMapping("/archiveall")
    public void archiveAll(@RequestParam("date") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)Date date){
        stateService.archiveAll(date);
        stateService.discardAll(date);
    }

}
