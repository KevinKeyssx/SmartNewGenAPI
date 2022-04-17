package com.smart.neww.gen.data;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = false)
public class LabelCategoryDTO extends Label {

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

	private Long idLabelCategory;

}
