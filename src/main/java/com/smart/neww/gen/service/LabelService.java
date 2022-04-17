/**
 * SmartNewGen exclusive class, all rights reserved
 */
package com.smart.neww.gen.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.PageImpl;
import org.springframework.stereotype.Service;

import lombok.extern.log4j.Log4j2;

import java.util.ArrayList;
import java.util.List;

import com.smart.neww.gen.common.Util;
import com.smart.neww.gen.data.LabelDTO;
import com.smart.neww.gen.entity.LabelSNG;
import com.smart.neww.gen.interfaces.ILabel;
import com.smart.neww.gen.repository.ILabelRepository;

/**
 * @author Kevin Candia 22-09-2020
 */
@Log4j2
@Service
public class LabelService implements ILabel {

	@Autowired
	private ILabelRepository iLabel;

	public LabelDTO findByIdLabel(Long idLabel) {
		log.info("*START - findByIdLabel*");
		LabelSNG label = iLabel.findByIdLabel(idLabel);
		log.info("*FINISHED - findByIdLabel*");
		return fillToLabelDTO(label);
	}

	@Override
	public void save(LabelDTO labelDTO) {
		log.info("*START - save Label*");
		iLabel.save(fillToLabelSNG(labelDTO));
		log.info("*FINISHED - save Label*");
	}

	@Override
	public void deleteById(Long idLabel) {
		log.info("*START - deleteByIdLabel*");
		iLabel.deleteById(idLabel);
		log.info("*FINISHED - deleteByIdLabel*");
	}

	private LabelDTO fillToLabelDTO(LabelSNG label) {
		if (label == null) {
			return null;
		}
		return new LabelDTO(
			label.getIdLabel(),
			label.getDescription(),
			label.getActive(),
			label.getComment(),
			null
		);
	}

	private LabelSNG fillToLabelSNG(LabelDTO label) {
		if (label == null) {
			return null;
		}
		return new LabelSNG(
			label.getIdLabel(),
			label.getDescription(),
			label.getActive(),
			label.getComment()
		);
	}

	@Override
	public Page<LabelDTO> findAll(Pageable labelPage) {
		log.info("STARTING - findfindAll");
		Page<LabelSNG> findLike = iLabel.findAll(labelPage);
        log.info("FINISHING - findBy");
        return fillLabelDTO(findLike);
	}

	private Page<LabelDTO> fillLabelDTO(Page<LabelSNG> labelPage) {
        log.info("STARTING - fillLabelDTO");
        if (labelPage == null || labelPage.getNumberOfElements() == 0) {
            return null;
        }
        var listLabelDTO = new ArrayList<LabelDTO>();
        labelPage.forEach(product -> {
            listLabelDTO.add(fillToLabelDTO(product));
        });
        log.info("FINISHING - fillLabelDTO");
        return new PageImpl<LabelDTO>(listLabelDTO);
    }

}
