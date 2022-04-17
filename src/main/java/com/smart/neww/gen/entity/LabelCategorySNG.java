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

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * @author Kevin Candia
 * 07-09-2020
 */
@Setter
@Getter
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = ConstantsDB.TABLE_LABELCATEGORY, schema = ConstantsDB.SCHEMA)
@TypeDef(name = "json", typeClass = JsonStringType.class)
@TypeDef(name = "jsonb", typeClass = JsonBinaryType.class)
public class LabelCategorySNG implements Serializable{

	// public LabelCategorySNG(Long idLabelCategory, String description, String skills, Boolean active, String comment, Long idLabel) {
	// 	this.idLabelCategory = idLabelCategory;
	// 	this.description = description;
	// 	this.skills = skills;
	// 	this.active = active;
	// 	this.comment = comment;
	// 	this.setLabels(idLabel);
	// }

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
