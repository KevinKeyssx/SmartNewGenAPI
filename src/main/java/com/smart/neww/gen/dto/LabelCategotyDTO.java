package com.smart.neww.gen.dto;

import java.io.Serializable;

import lombok.Data;

@Data
public class LabelCategotyDTO implements Serializable{

	
	private Long idLabelCategory;
	private Long idLabel;
	private String description;
	private String skills;
	private String comment;
	private Boolean active;
	private static final long serialVersionUID = 1L;

}
