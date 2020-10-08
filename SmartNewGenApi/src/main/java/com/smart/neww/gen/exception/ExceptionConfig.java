/**
 * SmartNewGen exclusive class, all rights reserved
 */
package com.smart.neww.gen.exception;

import java.io.Serializable;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;

import javassist.NotFoundException;

/**
 * @author Kevin Candia
 * 23-09-2020
 */
@ControllerAdvice(annotations = RestController.class)
public class ExceptionConfig implements Serializable{

	private static final long serialVersionUID = 1L;
	
	@ExceptionHandler(NotFoundException.class)
	public ResponseEntity<?> notFoundException(Exception e){
		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
	}
	
	@ExceptionHandler(BadRequestException.class)
	public ResponseEntity<?> badRequestException(Exception e){
		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
	}

}
