package com.smart.neww.gen.dto;

import java.io.Serializable;

import lombok.Data;


@Data
public class LabelCategoryDTO extends Label implements Serializable{

	/**
	 * @param idLabel
	 * @param description
	 * @param active
	 * @param comment
	 * @param skills
	 */
	public LabelCategoryDTO(Long idLabel, String description, Boolean active, String comment, String skills) {
		super(idLabel, description, active, comment);
		this.setSkills(skills);
	}


	private String skills;
	private static final long serialVersionUID = 1L;

}
