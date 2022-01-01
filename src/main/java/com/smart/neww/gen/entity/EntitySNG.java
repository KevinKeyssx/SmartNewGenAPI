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
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
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
	@Column(name = "idsentity", nullable = false)
	private Long idEntity;

	@Column(name = "sdescentity", nullable = false)
	private String nameEntity;

	@Column(name = "slastentity", nullable = false)
	private String lastEntity;

	@Column(name = "sngpoints", nullable = false)
	private Long points;

	@Column(name = "sngemail", nullable = false, unique = true)
	private String email;

	@Column(name = "sngnumber", nullable = false)
	private String telephone;

	@Column(name = "sngdatebir", nullable = true)
	private Date birdDate;

	@Column(name = "sdatearri", nullable = false)
	private Date daterArrive;

	@ManyToOne
	@JoinColumn(name = "idlabcat", nullable = false)
	private LabelCategorySNG idLabelcategory;

	@Column(name = "sngactive", nullable = false)
	private Boolean active;

	@Column(name = "sngcomm", nullable = true)
	private String comment;

	private static final long serialVersionUID = 1L;

}
