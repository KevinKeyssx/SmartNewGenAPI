package com.smart.neww.gen.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
//import javax.validation.constraint.Size;

import lombok.Data;

/**
 * SmartNewGen exclusive class, all rights reserved
 * @author Kevin Candia
 * 07-09-2020
 */
@Data
@Entity
@Table(name = "snglabel_categ", schema = "smartnewgen")
public class LabelCategorySNG implements Serializable{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "idlabcat")
	private Long idLabelCategoty;
	
	@Column(name = "IDSLABEL")
	private Long idLabel;
	
	//@Size(min = 0, max = 100, message = "Exedió el maximo de caracteres permitidos")
	@Column(name = "slabcatdesc")
	//@NotEmpty
	private String description;
	
	@Column(name = "labelskills")
	private String skills;
	
	@Column(name = "slaactiv")
	private Boolean active;
	
	@Column(name = "slacacomm")
	private String comment;

	private static final long serialVersionUID = 1L;

}
