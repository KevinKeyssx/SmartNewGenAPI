/**
 * SmartNewGen exclusive class, all rights reserved
 */
package com.smart.neww.gen.service;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
@Service
public class LabelCategoryService implements ILabelCategory {

	@Autowired
	private ILabelCategoryRepository iLabelCategory;

	private static final Logger console = LoggerFactory.getLogger(ILabelCategoryRepository.class.toString());

	public List<LabelDTO> findByIdLabel(Long idLabel) {
		console.info("*START - findByIdLabelCategory*");
		LabelSNG label = new LabelSNG(idLabel);
		// Obtenemos todos los datos de las etiquetas
		List<LabelCategorySNG> labelCategorysSNG = iLabelCategory.findByLabels(label);
		// Si no encuentra coincidencias
		if (labelCategorysSNG == null || labelCategorysSNG.isEmpty()) {
			return new ArrayList<>();
		}
		var labelCategorysDto = new ArrayList<LabelCategoryDTO>();
		var labelDto = new ArrayList<LabelDTO>();
		// Cargamos los valores de la categoria de la etiqueta
		for (LabelCategorySNG labelCategoryssSNG : labelCategorysSNG) {
			labelCategorysDto.add(new LabelCategoryDTO(
				labelCategoryssSNG.getIdLabelCategory(),
				labelCategoryssSNG.getDescription(),
				labelCategoryssSNG.getActive(),
				labelCategoryssSNG.getComment(),
				labelCategoryssSNG.getSkills())
			);
		}
		// Cargamos los valores de la etiqueta
		labelDto.add(new LabelDTO(
			labelCategorysSNG.get(0).getLabels().getIdLabel(),
			labelCategorysSNG.get(0).getLabels().getDescription(),
			labelCategorysSNG.get(0).getLabels().getActive(),
			labelCategorysSNG.get(0).getLabels().getComment(),
			labelCategorysDto
		));
		console.info("*FINISHED - findByIdLabelCategory*");
		return labelDto;
	}
}