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
//import javax.validation.constraint.Size;

import com.smart.neww.gen.util.ConstantsDataBase;

import lombok.Data;

/**
 * @author Kevin Candia
 * 07-09-2020
 */
@Data
@Entity
@Table(name = ConstantsDataBase.TABLE_LABELCATEGORY, schema = ConstantsDataBase.SCHEMA)
public class LabelCategorySNG implements Serializable{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "idlabcat")
	private Long idLabelCategoty;
	
	@Column(name = "idslabel")
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
