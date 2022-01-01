/**
 * SmartNewGen exclusive class, all rights reserved
 */
package com.smart.neww.gen.dto;

import java.util.List;

import lombok.Data;
import lombok.EqualsAndHashCode;
/**
 * @author Kevin Candia
 *         23-09-2020
 */
@Data
@EqualsAndHashCode(callSuper = false)
public class LabelDTO extends Label {

	/**
	 * @param idLabel
	 * @param description
	 * @param active
	 * @param comment
	 */
	public LabelDTO(Long idLabel, String description, Boolean active, String comment, List<LabelCategoryDTO> label) {
		super(idLabel, description, active, comment);
		this.setLabel(label);
	}

	private List<LabelCategoryDTO> label;

}
