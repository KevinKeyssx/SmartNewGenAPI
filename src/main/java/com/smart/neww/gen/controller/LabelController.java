/**
 * SmartNewGen exclusive class, all rights reserved
 */
package com.smart.neww.gen.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import com.smart.neww.gen.common.Constants;
import com.smart.neww.gen.common.Util;
import com.smart.neww.gen.dto.LabelDTO;
import com.smart.neww.gen.interfaces.ILabel;

/**
 * @author Kevin Candia
 *         23-09-2020
 */
@RestController
@RequestMapping(Constants.END_LABEL)
public class LabelController {

	@Autowired
	private ILabel iLabel;

	@GetMapping(path = Constants.SEARCH, produces = "application/json")
	public ResponseEntity<LabelDTO> findByIdLabel(@RequestParam(value = "number", required = true) Long number) {
		var labelDTO = iLabel.findByIdLabel(number);
		new Util(true).isActive(labelDTO.getActive(), "etiqueta", "ya no está disponible.");
		return new ResponseEntity<>(labelDTO, new Util(true).typeStatus(labelDTO));
	}

	@GetMapping(path = Constants.SEARCH_ALL, produces = "application/json")
	public ResponseEntity<List<LabelDTO>> findAll() {
		var labelDTO = iLabel.findAll();
		return new ResponseEntity<>(labelDTO, new Util(true).typeStatus(labelDTO));
	}

}
