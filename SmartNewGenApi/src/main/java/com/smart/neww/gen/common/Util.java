package com.smart.neww.gen.common;

import java.io.Serializable;

import org.springframework.http.HttpStatus;

/**
 * Kevin Candia
 */
public class Util implements Serializable {


    private static final long serialVersionUID = 1L;

    public Util(Boolean value) {
        if (Boolean.FALSE.equals(value))
            throw new IllegalAccessError("No se permite acceder");
    }

    public HttpStatus typeStatus(Object object){
        return object == null || object.toString().equals("[]") ||  object.toString().isBlank() ? 
            HttpStatus.NO_CONTENT: HttpStatus.OK;
	}

}
