/**
 * SmartNewGen exclusive class, all rights reserved
 */
package com.smart.neww.gen.service;

import java.util.List;

import com.smart.neww.gen.dto.LabelCategotyDTO;

/**
 * @author Kevin Candia
 * 07-09-2020
 */
public interface ILabelCategoryService {

	public List<LabelCategotyDTO> findByIdLabel(Long idLabel);
	
	public List<LabelCategotyDTO> findAll();

}
