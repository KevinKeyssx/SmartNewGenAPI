/**
 * SmartNewGen exclusive class, all rights reserved
 */
package com.smart.neww.gen.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

import com.smart.neww.gen.dto.LabelDTO;
import com.smart.neww.gen.entity.LabelSNG;
import com.smart.neww.gen.interfaces.ILabel;
import com.smart.neww.gen.repository.ILabelRepository;

/**
 * @author Kevin Candia 22-09-2020
 */
@Service
public class LabelService implements ILabel {

	private static final Logger log = LoggerFactory.getLogger(LabelService.class.getName());

	@Autowired
	private ILabelRepository iLabel;

	public LabelDTO findByIdLabel(Long idLabel) {
		log.info("*START - findByIdLabel*");
		LabelSNG label = iLabel.findByIdLabel(idLabel);

		if (label == null)
			return null;

		log.info("*FINISHED - findByIdLabel*");
		return fillToLabelDTO(label);
	}

	@Override
	public List<LabelDTO> findAll() {
		log.info("*START - findAll*");
		List<LabelSNG> labels = iLabel.findAll();
		List<LabelDTO> labelDTO = new ArrayList<>();

		for (LabelSNG label : labels)
			labelDTO.add(fillToLabelDTO(label));

		log.info("*FINISHED - findAll*");
		return labelDTO;
	}

	private LabelDTO fillToLabelDTO(LabelSNG label) {
		return new LabelDTO(
				label.getIdLabel(),
				label.getDescription(),
				label.getActive(),
				label.getComment(),
				null);
	}

}
