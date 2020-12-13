package com.smart.neww.gen.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
/**
 * SmartNewGen exclusive class, all rights reserved
 * @author Kevin Candia
 * 07-09-2020
 */
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.smart.neww.gen.common.Constants;
import com.smart.neww.gen.common.Util;
import com.smart.neww.gen.dto.EntityDTO;
import com.smart.neww.gen.exception.ExpectationFailedException;
import com.smart.neww.gen.service.IEntityService;

@RestController
@RequestMapping(Constants.END_USER)
public class UserSecurityController {

	private static final Logger LOG = LoggerFactory.getLogger(UserSecurityController.class.getName());

	@Autowired
    private IEntityService iEntity;

	@GetMapping(path = Constants.SEARCH, produces = "application/json")
	public ResponseEntity<EntityDTO> findByIdEntity(@RequestParam(
			value = "entity", required = true) Long entity) {
		LOG.info("*START - Controller findByIdEntity*");
		EntityDTO entityDTO = iEntity.findByIdEntity(entity);

		if(entityDTO != null && entityDTO.getActive().equals(Boolean.FALSE))
			throw new ExpectationFailedException("La entidad: "
				.concat(entityDTO.getNameEntity().concat(" ").concat(entityDTO.getLastEntity()) 
				.concat(" ya no esta disponible.")));

		LOG.info("*FINISHED - Controller findByIdEntity*");
		return new ResponseEntity<>(entityDTO, new Util(true).typeStatus(entityDTO));
	}

}
