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
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.Size;

import com.smart.neww.gen.common.ConstantsDB;

import lombok.Data;

/**
 * @author Kevin Candia
 * 07-09-2020
 */
@Data
@Entity
@Table(name = ConstantsDB.TABLE_LABELCATEGORY, schema = ConstantsDB.SCHEMA)
public class LabelCategorySNG implements Serializable{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "idlabcat")
	private Long idLabelCategory;

	@ManyToOne
	@JoinColumn(name = "idslabel")
	private LabelSNG label;

	@Column(name = "slabcatdesc")
	@Size(min = 1, max = 100, message = "Excedió el máximo de caractéres permitidos")
	private String description;

	@Column(name = "labelskills")
	private String skills;

	@Column(name = "slaactiv")
	private Boolean active;

	@Column(name = "slacacomm")
	private String comment;

	private static final long serialVersionUID = 1L;

}
