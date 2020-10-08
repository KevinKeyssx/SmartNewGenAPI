/**
 * SmartNewGen exclusive class, all rights reserved
 */
package com.smart.neww.gen.dto;

import java.io.Serializable;
import java.util.List;
import java.util.logging.Logger;

import com.smart.neww.gen.entity.LabelCategorySNG;

import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * @author Kevin Candia
 * 23-09-2020
 */
@Data
@EqualsAndHashCode(callSuper = false)
public class LabelDTO extends Label implements Serializable{
	
	private static final Logger LOGGER = Logger.getLogger(LabelDTO.class.getName());
	
	public LabelDTO() {
		LOGGER.info("New Label...");
	}

	/**
	 * @param label
	 */
	public LabelDTO(List<LabelCategorySNG> label) {
		super();
		this.label = label;
		LOGGER.info("Start Label...");
	}

	//idLabel
	//Description
	//Active
	//Commentary
	//Skills
	private List<LabelCategorySNG> label;
	private static final long serialVersionUID = 1L;
	
}
