package com.invoiceapp.configuration;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import javax.sql.DataSource;

@Configuration
@EnableTransactionManagement
public class CamundaDBConfig {

    @Value("${camunda.datasource.driver}")
    private String driver;
    @Value("${camunda.datasource.Url}")
    private String Url;
    @Value("${camunda.datasource.Username}")
    private String Username;
    @Value("${camunda.datasource.Password}")
    private String Password;

    @Primary
    @Bean(name = "dataSource")
    public DataSource dataSource() {
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setDriverClassName(driver);
        dataSource.setUrl(Url);
        dataSource.setUsername(Username);
        dataSource.setPassword(Password);
        return dataSource;
    }

}
