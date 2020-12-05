/**
 * SmartNewGen exclusive class, all rights reserved
 */
package com.smart.neww.gen.impl;

import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.smart.neww.gen.dto.LabelDTO;
import com.smart.neww.gen.entity.LabelSNG;
import com.smart.neww.gen.repository.ILabelRepository;
import com.smart.neww.gen.service.ILabelCategoryService;
import com.smart.neww.gen.service.ILabelService;

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
	private ILabelCategoryService labelCategoryService;

	public LabelDTO findByIdLabel(Long idLabel) {
		LabelSNG label = iLabel.findByIdLabel(idLabel);

		if( iLabel.findByIdLabel(idLabel) == null) 
			return null;

		return new LabelDTO(
			label.getIdLabel(),
			label.getDescription(),
			label.getActive(),
			label.getComment(),
			labelCategoryService.findByIdLabel(idLabel)
		);
	}

}
