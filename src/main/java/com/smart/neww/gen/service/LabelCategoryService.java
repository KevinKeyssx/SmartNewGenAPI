/**
 * SmartNewGen exclusive class, all rights reserved
 */
package com.smart.neww.gen.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.extern.log4j.Log4j2;

import com.smart.neww.gen.dto.LabelCategoryDTO;
import com.smart.neww.gen.dto.LabelDTO;
import com.smart.neww.gen.entity.LabelCategorySNG;
import com.smart.neww.gen.entity.LabelSNG;
import com.smart.neww.gen.interfaces.ILabelCategory;
import com.smart.neww.gen.repository.ILabelCategoryRepository;

/**
 * @author Kevin Candia
 *         22-09-2020
 */
@Log4j2
@Service
public class LabelCategoryService implements ILabelCategory {

	@Autowired
	private ILabelCategoryRepository iLabelCategory;

	public LabelDTO findByIdLabel(Long idLabel) {
		log.info("*START - findByLabelCategory*");
		// Obtenemos todos los datos de las etiquetas
		var labelCategorysSNG = iLabelCategory.findByLabels(new LabelSNG(idLabel));
		// Si no encuentra coincidencias
		if (labelCategorysSNG == null || labelCategorysSNG.isEmpty()) {
			return null;
		}
		var labelCategorysDto = new ArrayList<LabelCategoryDTO>();
		// Cargamos los valores de la categoria de la etiqueta
		for (var labelCategorySNG : labelCategorysSNG) {
			labelCategorysDto.add(fillLabelCategoryDTO(labelCategorySNG));
		}
		// Cargamos los valores de la etiqueta
		log.info("*FINISHED - findByLabelCategory*");
		return new LabelDTO(
			labelCategorysSNG.get(0).getLabels().getIdLabel(),
			labelCategorysSNG.get(0).getLabels().getDescription(),
			labelCategorysSNG.get(0).getLabels().getActive(),
			labelCategorysSNG.get(0).getLabels().getComment(),
			labelCategorysDto
		);
	}

	@Override
	public LabelCategoryDTO findByIdLabelCategory(Long idLabel) {
		log.info("*START - findByIdLabelCategory*");
		var labelCategorysSNG = iLabelCategory.findByIdLabelCategory(idLabel);
		log.info("*FINISHED - findByIdLabelCategory");
		return fillLabelCategoryDTO(labelCategorysSNG);
	}

	private LabelCategoryDTO fillLabelCategoryDTO(LabelCategorySNG labelCategorysSNG) {
		if (labelCategorysSNG == null) {
			return null;
		}
		return new LabelCategoryDTO(
			labelCategorysSNG.getIdLabelCategory(), 
			labelCategorysSNG.getDescription(), 
			labelCategorysSNG.getActive(), 
			labelCategorysSNG.getComment(), 
			labelCategorysSNG.getSkills()
		);
	}
}