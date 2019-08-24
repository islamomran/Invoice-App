package com.invoiceapp.repository;

import com.invoiceapp.model.StateModel;
import org.springframework.data.repository.CrudRepository;

public interface StateDAO extends CrudRepository<StateModel, String> {

}
