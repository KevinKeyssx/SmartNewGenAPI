/**
 * SmartNewGen exclusive class, all rights reserved
 */
package com.smart.neww.gen.dto;

import java.io.Serializable;
import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author Kevin Candia
 * 07-09-2020
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class EntityDTO implements Serializable {

	private Long idEntity;

	private String nameEntity;

	private String lastEntity;

	private String email;

	private String cellPhone;

	private Date birdDate;

	private Date dateArrive;

	private Boolean active;

    private String comment;

    private static final long serialVersionUID = 1L;

}
