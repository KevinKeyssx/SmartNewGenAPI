/**
 * SmartNewGen exclusive class, all rights reserved
 */
package com.smart.neww.gen.exception;

/**
 * @author Kevin Candia
 * 23-09-2020
 */
@SuppressWarnings("serial")
public class UnauthorizedException extends RuntimeException{
	
	public UnauthorizedException(String message) {
		super(message);
	}

}
