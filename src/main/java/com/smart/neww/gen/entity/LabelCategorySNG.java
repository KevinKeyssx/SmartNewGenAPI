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

import com.smart.neww.gen.common.ConstantsDB;
import com.vladmihalcea.hibernate.type.json.JsonBinaryType;
import com.vladmihalcea.hibernate.type.json.JsonStringType;

import org.hibernate.annotations.Type;
import org.hibernate.annotations.TypeDef;

import lombok.Data;

/**
 * @author Kevin Candia
 * 07-09-2020
 */
@Data
@Entity
@Table(name = ConstantsDB.TABLE_LABELCATEGORY, schema = ConstantsDB.SCHEMA)
@TypeDef(name = "json", typeClass = JsonStringType.class)
@TypeDef(name = "jsonb", typeClass = JsonBinaryType.class)
public class LabelCategorySNG implements Serializable{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "idlabcat")
	private Long idLabelCategory;

	@ManyToOne
	@JoinColumn(name = "idslabel", nullable = true)
	private LabelSNG labels;

	@Column(name = "slabcatdesc", length = 100, nullable = true)
	private String description;

	@Type(type = "jsonb")
	@Column(name = "labelskills", columnDefinition = "jsonb", nullable = false)
	private String skills;

	@Column(name = "slaactiv", nullable = true)
	private Boolean active;

	@Column(name = "slacacomm", length = 200, nullable = true)
	private String comment;

	private static final long serialVersionUID = 1L;

}
