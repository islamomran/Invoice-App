package com.invoiceapp.exception;

public class WrongSelectionException extends RuntimeException {
    public WrongSelectionException(String message){
        super(message);
    }
}
