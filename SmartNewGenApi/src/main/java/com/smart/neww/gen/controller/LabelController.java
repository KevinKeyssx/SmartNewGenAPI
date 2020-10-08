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

import com.smart.neww.gen.dto.LabelDTO;
import com.smart.neww.gen.service.ILabelService;
import com.smart.neww.gen.util.Constants;

import javassist.NotFoundException;

/**
 * @author Kevin Candia
 * 23-09-2020
 */
@RestController
@RequestMapping(Constants.END_LABEL)
public class LabelController {

	@Autowired
	private ILabelService iLabel;

	@GetMapping(path = Constants.SEARCH)
	public ResponseEntity<LabelDTO> findByIdLabel(@RequestParam(value = "number", required = true) Long number) throws NotFoundException {
		LabelDTO labelDTO = iLabel.findByIdLabel(number);
		
		if(labelDTO == null) 
			throw new NotFoundException("La etiqueta a buscar no existe");
		
		return new ResponseEntity<>(labelDTO, HttpStatus.OK);
	}
	
}
