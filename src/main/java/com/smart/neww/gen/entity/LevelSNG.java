package com.smart.neww.gen.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name = "USSLEVEL", schema = "SmartNewGenTest")
public class LevelSNG implements Serializable{

	@Column(name = "USSIDLEVEL")
	private String idLevel;
	@Column(name = "USSDESC")
	private String description;
	@Column(name = "USSPOINT")
	private Integer point;
	@Column(name = "USACTIV")
	private Boolean active;
	@Column(name = "USCOMMEN")
	private String commen;		
	private static final long serialVersionUID = 1L;
	
}
