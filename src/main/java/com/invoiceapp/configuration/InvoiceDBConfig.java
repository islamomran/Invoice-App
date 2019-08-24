package com.invoiceapp.configuration;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.orm.jpa.EntityManagerFactoryBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import javax.persistence.EntityManagerFactory;
import javax.sql.DataSource;
import java.util.HashMap;
import java.util.Map;

@Configuration
@EnableTransactionManagement
@EnableJpaRepositories(
        entityManagerFactoryRef = "invoiceEntityManagerFactory",
        transactionManagerRef = "InvoiceTransactionManager",
        basePackages = { "com.invoiceapp.repository" }
)
public class InvoiceDBConfig {

    @Bean(name = "invoiceDataSource")
    public DataSource invoiceDataSource() {
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setDriverClassName("com.mysql.cj.jdbc.Driver");
        dataSource.setUrl("jdbc:mysql://localhost:3306/mydb");
        dataSource.setUsername("root");
        dataSource.setPassword("0122320747");

        return dataSource;
    }

    @Bean(name = "invoiceEntityManagerFactory")
    public LocalContainerEntityManagerFactoryBean
    invoiceEntityManagerFactory(
            EntityManagerFactoryBuilder builder,
            @Qualifier("invoiceDataSource") DataSource dataSource
    ) {
        Map<String, Object> properties = new HashMap<String, Object>();
        properties.put("hibernate.hbm2ddl.auto", "create");
        return
                builder
                        .dataSource(dataSource)
                        .packages("com.invoiceapp.model")
                        .persistenceUnit("mydb")
                        .properties(properties)
                        .build();
    }
    @Bean(name = "InvoiceTransactionManager")
    public PlatformTransactionManager invoiceTransactionManager(
            @Qualifier("invoiceEntityManagerFactory") EntityManagerFactory
                    invoiceEntityManagerFactory
    ) {
        return new JpaTransactionManager(invoiceEntityManagerFactory);
    }
}