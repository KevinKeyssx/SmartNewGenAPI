/**
 * SmartNewGen exclusive class, all rights reserved
 */
package com.smart.neww.gen.service;

import java.util.List;

import com.smart.neww.gen.entity.LabelCategorySNG;

/**
 * @author Kevin Candia
 * 07-09-2020
 */
public interface ILabelCategoryService {

	public List<LabelCategorySNG> findByIdLabel(Long idLabel);
	
	public List<LabelCategorySNG> findAll();

}
