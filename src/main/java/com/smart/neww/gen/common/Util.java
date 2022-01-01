/**
 * SmartNewGen exclusive class, all rights reserved
 */
package com.smart.neww.gen.common;

import java.io.Serializable;

import com.smart.neww.gen.exception.ExpectationFailedException;

import org.springframework.http.HttpStatus;

/**
 * @author Kevin Candia
 * 13-12-2020
 * 
 */
public class Util implements Serializable {

    private static final long serialVersionUID = 1L;

    public Util(Boolean value) {
        if (Boolean.FALSE.equals(value))
            throw new IllegalAccessError("Ilegal access.");
    }

    public HttpStatus typeStatus(Object object){
        return object == null || object.toString().equals("[]") ||  object.toString().isBlank() ? 
            HttpStatus.NO_CONTENT: HttpStatus.OK;
    }

    public void isActive(Boolean active, String name, String lastName){
		if(active == null || active.equals(Boolean.FALSE))
			throw new ExpectationFailedException(activeMessage(name, lastName));
    }

    private String activeMessage(String name, String lastName){
        return "La entidad: "
            .concat( lastName != null ? 
                name.concat(" ").concat(lastName) : name
            .concat(" ya no esta disponible."));
    }

    public boolean isNumeric(String value) {
        try {
            Integer.parseInt(value);
            return true;
        } catch (NumberFormatException excepcion) {
            return false;
        }
    }

    public boolean isLong(String value) {
        try {
            Long.parseLong(value);
            return true;
        } catch (NumberFormatException excepcion) {
            return false;
        }
    }

    public Long asLong(String value) {
        try {
            return Long.parseLong(value);
        } catch (NumberFormatException excepcion) {
            return null;
        }
    }

}
