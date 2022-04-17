/**
 * SmartNewGen exclusive class, all rights reserved
 */
package com.smart.neww.gen.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.log4j.Log4j2;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.Date;

import javax.validation.Valid;

import com.smart.neww.gen.common.Constants;
import com.smart.neww.gen.common.Util;
import com.smart.neww.gen.data.LabelCategoryDTO;
import com.smart.neww.gen.data.LabelDTO;
import com.smart.neww.gen.data.ResponseDTO;
import com.smart.neww.gen.interfaces.ILabelCategory;

/**
 * @author Kevin Candia
 *         16-09-2020
 */
@Log4j2
@RestController
@RequestMapping(Constants.END_LABEL_CATEGORY)
public class LabelCategoryController {

	@Autowired
	private ILabelCategory iLabelCategory;

	@GetMapping(path = Constants.SEARCH, produces = "application/json")
	public ResponseEntity<LabelDTO> findByIdLabel(@RequestParam(value = "number", required = true) Long number) {
		log.info("*START - Controller findByIdLabel*");
		var labelDTO = iLabelCategory.findByIdLabel(number);
		new Util(true).isActive(labelDTO.getActive(), "Label", "ya no está disponible.");
		log.info("*FINISHED - Controller findByIdLabel*");
		return new ResponseEntity<>(labelDTO, new Util(true).typeStatus(labelDTO));
	}

	@GetMapping(path = Constants.SEARCH_BY_ID, produces = "application/json")
	public ResponseEntity<LabelCategoryDTO> findByIdLabelCategory(@RequestParam(value = "number", required = true) Long number) {
		log.info("*START - Controller findByIdLabelCategory*");
		var labelDTO = iLabelCategory.findByIdLabelCategory(number);
		new Util(true).isActive(labelDTO.getActive(), "Label", "ya no está disponible.");
		log.info("*FINISHED - Controller findByIdLabelCategory*");
		return new ResponseEntity<>(labelDTO, new Util(true).typeStatus(labelDTO));
	}

	@PostMapping(path =	Constants.SAVE, consumes = "application/json", produces = "application/json")
	public ResponseEntity<ResponseDTO> save(@Valid @RequestBody LabelCategoryDTO labelDTO) {
		log.info("*START - Controller save*");
		iLabelCategory.save(labelDTO);
		log.info("*FINISHED - Controller save*");
		return new ResponseEntity<ResponseDTO>(new ResponseDTO(Constants.SUCCESS_SAVE_LABEL, new Date()), HttpStatus.CREATED);
	}

	@DeleteMapping(path = Constants.DELETE, produces = "application/json")
	public ResponseEntity<ResponseDTO> deleteById(@RequestParam(value = "labelId", required = true) Long labelId) {
		log.info("*START - Controller deleteById*");
		iLabelCategory.deleteById(labelId);
		log.info("*FINISHED - Controller deleteById*");
		return new ResponseEntity<>(new ResponseDTO(Constants.SUCCESS_DELETE_LABEL, new Date()), HttpStatus.ACCEPTED);
	}

}
