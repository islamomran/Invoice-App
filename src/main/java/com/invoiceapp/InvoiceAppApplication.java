package com.invoiceapp;

import com.invoiceapp.service.EmployeeReportService;
import org.camunda.bpm.spring.boot.starter.annotation.EnableProcessApplication;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;

@SpringBootApplication
@EnableProcessApplication("MyProcessApp")
public class InvoiceAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(InvoiceAppApplication.class, args);
	}

	@Bean
	public String generateReport(final EmployeeReportService employeeReportService) {

		String msg = employeeReportService.generateReport();

		System.out.println(msg);

		return msg;
	}

}
