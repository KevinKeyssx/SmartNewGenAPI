/**
 * SmartNewGen exclusive class, all rights reserved
 */
package com.smart.neww.gen.impl;

import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.smart.neww.gen.dto.LabelDTO;
import com.smart.neww.gen.entity.LabelSNG;
import com.smart.neww.gen.repository.ILabelCategoryRepository;
import com.smart.neww.gen.repository.ILabelRepository;
import com.smart.neww.gen.service.ILabelService;

import javassist.NotFoundException;

/**
 * @author Kevin Candia
 * 22-09-2020
 */
@Service
public class LabelImpl implements ILabelService {
	
	private static final Logger LOGGER = Logger.getLogger(LabelImpl.class.getName());
	
	@Autowired
	private ILabelRepository iLabel;
	
	@Autowired
	private ILabelCategoryRepository iLabelCategory;

	
	public LabelDTO findByIdLabel(Long idLabel) {
		LabelDTO labelDTO = new LabelDTO();
		LabelSNG label = iLabel.findByIdLabel(idLabel);
		
		if(label == null) 
			return null;
			
		labelDTO.setIdLabel(label.getIdLabel());
		labelDTO.setDescription(label.getDescription());
		labelDTO.setActive(label.getActive());
		labelDTO.setComment(label.getComment());
		labelDTO.setLabel(iLabelCategory.findByIdLabel(label.getIdLabel()));
		
		return labelDTO;
	}

}
