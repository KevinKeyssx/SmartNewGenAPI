/**
 * SmartNewGen exclusive class, all rights reserved
 */
package com.smart.neww.gen.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.smart.neww.gen.common.ConstantsDB;

import lombok.Data;

/**
 * @author Kevin Candia
 * 07-09-2020
 */
@Data
@Entity
@Table(name = ConstantsDB.TABLE_ENTITY, schema = ConstantsDB.SCHEMA)
public class EntitySNG implements Serializable{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "idsentity")
	private Long idEntity;
	
	@Column(name = "sdescentity")
	private String nameRazon;
	
	@Column(name = "slastentity")
	private String lastNum;
	
	@Column(name = "sngpoints")
	private Long points;
	
	@Column(name = "sngemail")
	private String email;
	
	@Column(name = "sngnumber")
	private String telephone;
	
	@Column(name = "sngdatebir")
	private Date birdDate;
	
	@Column(name = "sdatearri")
	private Date daterArrive;
	
	@Column(name = "idlabcat")
	private Long idLabelcategory;
	
	@Column(name = "sngactive")
	private Boolean active;
	
	@Column(name = "sngcomm")
	private String comment;

	private static final long serialVersionUID = 1L;
	
}
