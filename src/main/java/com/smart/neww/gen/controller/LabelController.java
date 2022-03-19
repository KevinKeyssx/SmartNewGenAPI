/**
 * SmartNewGen exclusive class, all rights reserved
 */
package com.smart.neww.gen.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.log4j.Log4j2;

import java.util.List;

import com.smart.neww.gen.common.Constants;
import com.smart.neww.gen.common.Util;
import com.smart.neww.gen.data.LabelDTO;
import com.smart.neww.gen.interfaces.ILabel;

/**
 * @author Kevin Candia
 *         23-09-2020
 */
@Log4j2
@RestController
@RequestMapping(Constants.END_LABEL)
public class LabelController {

	@Autowired
	private ILabel iLabel;

	@GetMapping(path = Constants.SEARCH_ALL, produces = "application/json")
	public ResponseEntity<Page<LabelDTO>> findByProduct(
		@RequestParam(defaultValue = Constants.DEFAULT_PAGE) 	int page,
		@RequestParam(defaultValue = Constants.DEFAULT_SIZE) 	int size,
		@RequestParam(defaultValue = Constants.DEFAULT_ORDER) 	String order,
		@RequestParam(defaultValue = Constants.DEFAULT_ASC) 	boolean asc
		// @RequestParam(required = true) 							String value
	) {
		log.info("*START - Controller findByProduct*");
		var sort = asc ? Sort.by(order) : Sort.by(order).descending();
		var productsDTO = iLabel.findAll(PageRequest.of(page, size, sort));
		log.info("*FINISHED - Controller findByProduct*");
		return new ResponseEntity<>(productsDTO, new Util(true).typeStatus(productsDTO));
	}

	@GetMapping(path = Constants.SEARCH, produces = "application/json")
	public ResponseEntity<LabelDTO> findByIdLabel(@RequestParam(value = "number", required = true) Long number) {
		log.info("*START - Controller findByIdLabel*");
		var labelDTO = iLabel.findByIdLabel(number);
		if (labelDTO != null) {
			new Util(true).isActive(labelDTO.getActive(), "etiqueta", "ya no está disponible.");
		}
		log.info("*FINISHED - Controller findByIdLabel*");
		return new ResponseEntity<>(labelDTO, new Util(true).typeStatus(labelDTO));
	}

	// @GetMapping(path = Constants.SEARCH_ALL, produces = "application/json")
	// public ResponseEntity<List<LabelDTO>> findAll() {
	// 	log.info("*START - Controller findByIdLabel*");
	// 	var labelDTO = iLabel.findAll();
	// 	log.info("*FINISHED - Controller findByIdLabel*");
	// 	return new ResponseEntity<>(labelDTO, new Util(true).typeStatus(labelDTO));
	// }

}
