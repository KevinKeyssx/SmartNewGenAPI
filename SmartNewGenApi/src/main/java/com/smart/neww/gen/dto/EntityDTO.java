/**
 * SmartNewGen exclusive class, all rights reserved
 */
package com.smart.neww.gen.dto;

import java.io.Serializable;
import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;

/**
 * @author Kevin Candia
 * 07-09-2020
 */
@Data
@AllArgsConstructor
public class EntityDTO implements Serializable {

	private Long idEntity;

	private String nameEntity;

	private String lastEntity;

	private Long points;

	private String email;

	private String telephone;

	private Date birdDate;

	private Date daterArrive;

	private String typeCategory;

	private Boolean active;

    private String comment;

    private static final long serialVersionUID = 1L;

}
