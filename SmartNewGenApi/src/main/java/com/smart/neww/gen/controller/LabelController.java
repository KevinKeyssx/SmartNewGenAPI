/**
 * SmartNewGen exclusive class, all rights reserved
 */
package com.smart.neww.gen.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.smart.neww.gen.common.Constants;
import com.smart.neww.gen.dto.LabelDTO;
import com.smart.neww.gen.exception.ExpectationFailedException;
import com.smart.neww.gen.service.ILabelService;

/**
 * @author Kevin Candia
 * 23-09-2020
 */
@RestController
@RequestMapping(Constants.END_LABEL)
public class LabelController {

	@Autowired
	private ILabelService iLabel;

	@GetMapping(path = Constants.SEARCH, produces = "application/json")
	public ResponseEntity<LabelDTO> findByIdLabel(@RequestParam(value = "number", required = true) Long number) {
		LabelDTO labelDTO = iLabel.findByIdLabel(number);

		if(labelDTO != null && labelDTO.getActive().equals(Boolean.FALSE))
			throw new ExpectationFailedException("La etiqueta: " + labelDTO.getDescription() + " ya no esta disponible.");

		return new ResponseEntity<>(labelDTO, labelDTO == null ? HttpStatus.NO_CONTENT: HttpStatus.OK);
	}

}
