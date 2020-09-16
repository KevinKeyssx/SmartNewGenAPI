/**
 * SmartNewGen exclusive class, all rights reserved
 */
package com.smart.neww.gen.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.smart.neww.gen.util.ConstantsDataBase;

import lombok.Data;

/**
 * @author Kevin Candia
 * 07-09-2020
 */
@Data
@Entity
@Table(name = ConstantsDataBase.TABLE_LABEL, schema = ConstantsDataBase.SCHEMA)
public class LabelSNG implements Serializable{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "IDSLABEL")
	private Long idLabel;
	
	@Column(name = "SLABDESC")
	private String description;
	
	@Column(name = "SLABACTIV")
	private Boolean active;
	
	@Column(name = "SLABCOMM")
	private String comment;
	
	private static final long serialVersionUID = 1L;

}
