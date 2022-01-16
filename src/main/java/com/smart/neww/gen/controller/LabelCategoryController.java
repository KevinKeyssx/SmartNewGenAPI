/**
 * SmartNewGen exclusive class, all rights reserved
 */
package com.smart.neww.gen.controller;

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
import com.smart.neww.gen.dto.LabelCategoryDTO;
import com.smart.neww.gen.dto.LabelDTO;
import com.smart.neww.gen.interfaces.ILabelCategory;

/**
 * @author Kevin Candia
 *         16-09-2020
 */
@RestController
@RequestMapping(Constants.END_LABEL_CATEGORY)
public class LabelCategoryController {

	private static final Logger LOG = LoggerFactory.getLogger(LabelCategoryController.class.getName());

	@Autowired
	private ILabelCategory iLabelCategory;

	@GetMapping(path = Constants.SEARCH, produces = "application/json")
	public ResponseEntity<LabelDTO> findByIdLabel(@RequestParam(value = "number", required = true) Long number) {
		LOG.info("*START - Controller findByIdLabel*");
		var labelDTO = iLabelCategory.findByIdLabel(number);
		new Util(true).isActive(labelDTO.getActive(), "Label", "ya no está disponible.");
		LOG.info("*FINISHED - Controller findByIdLabel*");
		return new ResponseEntity<>(labelDTO, new Util(true).typeStatus(labelDTO));
	}

	@GetMapping(path = Constants.SEARCH_BY_ID, produces = "application/json")
	public ResponseEntity<LabelCategoryDTO> findByIdLabelCategory(@RequestParam(value = "number", required = true) Long number) {
		LOG.info("*START - Controller findByIdLabelCategory*");
		var labelDTO = iLabelCategory.findByIdLabelCategory(number);
		new Util(true).isActive(labelDTO.getActive(), "Label", "ya no está disponible.");
		LOG.info("*FINISHED - Controller findByIdLabelCategory*");
		return new ResponseEntity<>(labelDTO, new Util(true).typeStatus(labelDTO));
	}

}
