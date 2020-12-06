/**
 * SmartNewGen exclusive class, all rights reserved
 */
package com.smart.neww.gen.impl;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.smart.neww.gen.dto.LabelDTO;
import com.smart.neww.gen.entity.LabelSNG;
import com.smart.neww.gen.repository.ILabelRepository;
import com.smart.neww.gen.service.ILabelService;

/**
 * @author Kevin Candia
 * 22-09-2020
 */
@Service
public class LabelImpl implements ILabelService {

	private static final Logger LOG = LoggerFactory.getLogger(LabelImpl.class.getName());

	@Autowired
	private ILabelRepository iLabel;

	public LabelDTO findByIdLabel(Long idLabel) {
		LOG.info("*START - findByIdLabel*");
		LabelSNG label = iLabel.findByIdLabel(idLabel);

		if( label == null) 
			return null;

		LOG.info("*FINISHED - findByIdLabel*");
		return new LabelDTO(
			label.getIdLabel(),
			label.getDescription(),
			label.getActive(),
			label.getComment(), 
			null
		);
	}

}
