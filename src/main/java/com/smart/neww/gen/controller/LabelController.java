/**
 * SmartNewGen exclusive class, all rights reserved
 */
package com.smart.neww.gen.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.log4j.Log4j2;

import java.util.Date;

import javax.validation.Valid;

import com.smart.neww.gen.common.Constants;
import com.smart.neww.gen.common.Util;
import com.smart.neww.gen.data.LabelDTO;
import com.smart.neww.gen.data.ResponseDTO;
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
	) {
		log.info("*START - Controller findByProduct*");
		var sort = asc ? Sort.by(order) : Sort.by(order).descending();
		var productsDTO = iLabel.findAll(PageRequest.of(page, size, sort));
		log.info("*FINISHED - Controller findByProduct*");
		return new ResponseEntity<>(productsDTO, new Util(true).typeStatus(productsDTO));
	}

	@GetMapping(path = Constants.SEARCH, produces = "application/json")
	public ResponseEntity<LabelDTO> findByIdLabel(@RequestParam(value = "labelid", required = true) Long number) {
		log.info("*START - Controller findByIdLabel*");
		var labelDTO = iLabel.findByIdLabel(number);
		if (labelDTO != null) {
			new Util(true).isActive(labelDTO.getActive(), "etiqueta", "ya no está disponible.");
		}
		log.info("*FINISHED - Controller findByIdLabel*");
		return new ResponseEntity<>(labelDTO, new Util(true).typeStatus(labelDTO));
	}

	@PostMapping(path =	Constants.SAVE, consumes = "application/json", produces = "application/json")
	public ResponseEntity<ResponseDTO> save(@Valid @RequestBody LabelDTO labelDTO) {
		log.info("*START - Controller save*");
		iLabel.save(labelDTO);
		log.info("*FINISHED - Controller save*");
		return new ResponseEntity<ResponseDTO>(new ResponseDTO(Constants.SUCCESS_SAVE_LABEL, new Date()), HttpStatus.CREATED);
	}

	@DeleteMapping(path = Constants.DELETE, produces = "application/json")
	public ResponseEntity<ResponseDTO> deleteById(@RequestParam(value = "labelId", required = true) Long labelId) {
		log.info("*START - Controller deleteById*");
		iLabel.deleteById(labelId);
		log.info("*FINISHED - Controller deleteById*");
		return new ResponseEntity<>(new ResponseDTO(Constants.SUCCESS_DELETE_LABEL, new Date()), HttpStatus.ACCEPTED);
	}

}
