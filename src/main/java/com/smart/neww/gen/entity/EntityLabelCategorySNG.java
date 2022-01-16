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

import lombok.Data;
/**
 * @author Kevin Candia
 * @date 02-02-2022
 */
@Data
@Entity
@Table(name = ConstantsDB.TABLE_ENTITY_LABELCATEGORY, schema = ConstantsDB.SCHEMA)
public class EntityLabelCategorySNG implements Serializable {

    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "identitylabcat")
	private Long idEntityLabelCategory;

	@ManyToOne
	@JoinColumn(name = "idsentity")
	private EntitySNG entity;

	@ManyToOne
	@JoinColumn(name = "idlabcat")
	private LabelCategorySNG labelCategory;

	private static final long serialVersionUID = 1L;

}