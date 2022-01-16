/**
 * SmartNewGen exclusive class, all rights reserved
 */
package com.smart.neww.gen.dto;

import java.io.Serializable;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
/**
 * @author Kevin Candia
 * 15-01-2022
 */
@Data
@AllArgsConstructor
public class EntityLabelCategoryDTO implements Serializable {

	private EntityDTO entity;

	private List<LabelCategoryDTO> labelCategorys;

	private static final long serialVersionUID = 1L;

}