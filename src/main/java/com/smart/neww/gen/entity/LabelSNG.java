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

import com.smart.neww.gen.common.ConstantsDB;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
/**
 * @author Kevin Candia
 *         07-09-2020
 */
@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = ConstantsDB.TABLE_LABEL, schema = ConstantsDB.SCHEMA)
public class LabelSNG implements Serializable {

	public LabelSNG(Long idLabel) {
		this.idLabel = idLabel;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "idslabel", nullable = false)
	private Long idLabel;

	@Column(name = "slabdesc", nullable = false)
	private String description;

	@Column(name = "slabactiv", nullable = false)
	private Boolean active;

	@Column(name = "slabcomm", nullable = false)
	private String comment;

	private static final long serialVersionUID = 1L;

}
