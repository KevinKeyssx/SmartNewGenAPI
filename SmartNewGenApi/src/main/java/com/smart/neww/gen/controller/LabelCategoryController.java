/**
 * SmartNewGen exclusive class, all rights reserved
 */
package com.smart.neww.gen.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.smart.neww.gen.common.Constants;
import com.smart.neww.gen.dto.LabelCategotyDTO;
import com.smart.neww.gen.dto.LabelDTO;
import com.smart.neww.gen.entity.LabelCategorySNG;
import com.smart.neww.gen.exception.ExpectationFailedException;
import com.smart.neww.gen.exception.NotFoundException;
import com.smart.neww.gen.service.ILabelCategoryService;
import com.smart.neww.gen.service.ILabelService;

/**
 * @author Kevin Candia
 * 16-09-2020
 */
@RestController
@RequestMapping(Constants.END_LABEL_CATEGORY)
public class LabelCategoryController {

	@Autowired
	private ILabelCategoryService iLabelCategory;

	@GetMapping(path = Constants.SEARCH, produces = "application/json")
	public ResponseEntity<List<LabelDTO>> findByIdLabel(@RequestParam(value = "number", required = true) Long number) {
		List<LabelDTO> labelDTO = iLabelCategory.findByIdLabel(number);

		if(!labelDTO.isEmpty() && labelDTO.get(0).getActive().equals(Boolean.FALSE))
			throw new ExpectationFailedException("La etiqueta: " + labelDTO.get(0).getDescription() + " ya no esta disponible.");

		return new ResponseEntity<>(labelDTO, labelDTO.isEmpty() ? HttpStatus.NO_CONTENT : HttpStatus.OK);
	}

}
