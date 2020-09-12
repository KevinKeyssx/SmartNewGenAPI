package com.smart.neww.gen.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

/**
 * SmartNewGen exclusive class, all rights reserved
 * @author Kevin Candia
 * 07-09-2020
 */
@Data
@Entity
@Table(name = "SNGLABEL", schema = "smartnewgen")
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
