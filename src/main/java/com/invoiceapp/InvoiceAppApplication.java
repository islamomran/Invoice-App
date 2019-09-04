package com.invoiceapp;

import org.camunda.bpm.spring.boot.starter.annotation.EnableProcessApplication;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@EnableProcessApplication("MyProcessApp")
public class InvoiceAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(InvoiceAppApplication.class, args);
	}

}
