/**
 * SmartNewGen exclusive class, all rights reserved
 */
package com.smart.neww.gen.controller;

import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;

import com.smart.neww.gen.common.Constants;
import com.smart.neww.gen.common.Util;
import com.smart.neww.gen.dto.LabelDTO;
import com.smart.neww.gen.exception.ExpectationFailedException;
import com.smart.neww.gen.service.ILabelCategoryService;
/**
 * @author Kevin Candia
 * 16-09-2020
 */
@RestController
@RequestMapping(Constants.END_LABEL_CATEGORY)
public class LabelCategoryController {

	private static final Logger LOG = LoggerFactory.getLogger(LabelCategoryController.class.getName());

	@Autowired
	private ILabelCategoryService iLabelCategory;

	@GetMapping(path = Constants.SEARCH, produces = "application/json")
	public ResponseEntity<List<LabelDTO>> findByIdLabel(@RequestParam(
			value = "number", required = true) Long number) {
		LOG.info("*START - Controller findByIdLabel*");
		List<LabelDTO> labelDTO = iLabelCategory.findByIdLabel(number);

		if(!labelDTO.isEmpty() && labelDTO.get(0).getActive().equals(Boolean.FALSE))
			throw new ExpectationFailedException("La etiqueta: "
				.concat(labelDTO.get(0).getDescription())
				.concat(" ya no esta disponible."));

		LOG.info("*FINISHED - Controller findByIdLabel*");
		return new ResponseEntity<>(labelDTO, new Util(true).typeStatus(labelDTO));
	}

}
