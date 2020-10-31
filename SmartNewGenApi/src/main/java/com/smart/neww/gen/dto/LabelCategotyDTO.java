package com.smart.neww.gen.dto;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.smart.neww.gen.common.ConstantsDataBase;

import lombok.Data;

@Data
@Entity
@Table(name = ConstantsDataBase.TABLE_V_CATEGORY, schema = ConstantsDataBase.SCHEMA)
public class LabelCategotyDTO implements Serializable{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "idlabcat")
	private Long idLabelCategory;
	
	@Column(name = "idslabel")
	private Long idLabel;
	
	@Column(name = "slabcatdesc")
	private String descriptionCategory;
	
	@Column(name = "slabdesc")
	private String descriptionLabel;
	
	@Column(name = "labelskills")
	private String skills;
	
	@Column(name = "slaactiv")
	private Boolean activeCategory;
	
	@Column(name = "slabactiv")
	private Boolean activeLabel;
	
	@Column(name = "slacacomm")
	private String commentCategory;
	
	@Column(name = "slabcomm")
	private String commentLabel;
	
	private static final long serialVersionUID = 1L;

}
