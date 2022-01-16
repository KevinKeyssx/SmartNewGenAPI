/**
 * SmartNewGen exclusive class, all rights reserved
 */
package com.smart.neww.gen.error;

import java.io.Serializable;
import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Data;

/**
 * @author Kevin Candia
 * 01-11-2020
 */
@Data
@AllArgsConstructor
public class ExceptionResponse implements Serializable{

	private LocalDateTime timestamp;

	private String message;

	private String details;

	private static final long serialVersionUID = 1L;

}
