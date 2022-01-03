/**
 * SmartNewGen exclusive class, all rights reserved
 */
package com.smart.neww.gen.service;

import java.util.ArrayList;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.smart.neww.gen.dto.LabelCategoryDTO;
import com.smart.neww.gen.dto.LabelDTO;
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

	public LabelDTO findByIdLabel(Long idLabel) {
		console.info("*START - findByIdLabelCategory*");
		// Obtenemos todos los datos de las etiquetas
		var labelCategorysSNG = iLabelCategory.findByLabels(new LabelSNG(idLabel));
		// Si no encuentra coincidencias
		if (labelCategorysSNG == null || labelCategorysSNG.isEmpty()) {
			return null;
		}
		var labelCategorysDto = new ArrayList<LabelCategoryDTO>();
		// Cargamos los valores de la categoria de la etiqueta
		for (var labelCategoryssSNG : labelCategorysSNG) {
			labelCategorysDto.add(new LabelCategoryDTO(
				labelCategoryssSNG.getIdLabelCategory(),
				labelCategoryssSNG.getDescription(),
				labelCategoryssSNG.getActive(),
				labelCategoryssSNG.getComment(),
				labelCategoryssSNG.getSkills())
			);
		}
		// Cargamos los valores de la etiqueta
		console.info("*FINISHED - findByIdLabelCategory*");
		return new LabelDTO(
			labelCategorysSNG.get(0).getLabels().getIdLabel(),
			labelCategorysSNG.get(0).getLabels().getDescription(),
			labelCategorysSNG.get(0).getLabels().getActive(),
			labelCategorysSNG.get(0).getLabels().getComment(),
			labelCategorysDto
		);
	}
}