/**
 * SmartNewGen exclusive class, all rights reserved
 */
package com.smart.neww.gen.exception;

/**
 * @author Kevin Candia
 * 23-09-2020
 */
public class NotFoundException extends RuntimeException{

	public NotFoundException() {}
	public NotFoundException(String message) {
		super(message);
	}
	private static final long serialVersionUID = 1L;

}
