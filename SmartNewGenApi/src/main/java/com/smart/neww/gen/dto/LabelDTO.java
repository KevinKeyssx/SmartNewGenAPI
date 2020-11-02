/**
 * SmartNewGen exclusive class, all rights reserved
 */
package com.smart.neww.gen.dto;

import java.io.Serializable;
import java.util.List;
import java.util.logging.Logger;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * @author Kevin Candia
 * 23-09-2020
 */
@Data
@EqualsAndHashCode(callSuper = false)

public class LabelDTO extends Label implements Serializable{

	/**
	 * @param idLabel
	 * @param description
	 * @param active
	 * @param comment
	 */
	public LabelDTO(Long idLabel, String description, Boolean active, String comment, List<LabelCategotyDTO> label) {
		super(idLabel, description, active, comment);
		this.setLabel(label);
	}
	private static final Logger LOGGER = Logger.getLogger(LabelDTO.class.getName());
	private List<LabelCategotyDTO> label;
	private static final long serialVersionUID = 1L;

}
