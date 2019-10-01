package com.invoiceapp;

import org.camunda.bpm.spring.boot.starter.annotation.EnableProcessApplication;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;

@SpringBootApplication
@EnableProcessApplication("MyProcessApp")
public class InvoiceAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(InvoiceAppApplication.class, args);
	}

}
