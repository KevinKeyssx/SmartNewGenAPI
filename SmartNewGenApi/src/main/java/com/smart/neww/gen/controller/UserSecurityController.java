/**
 * SmartNewGen exclusive class, all rights reserved
 */
package com.smart.neww.gen.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import javax.validation.Valid;

import com.smart.neww.gen.common.Constants;
import com.smart.neww.gen.common.Util;
import com.smart.neww.gen.dto.EntityDTO;
import com.smart.neww.gen.service.IEntityService;

/**
 * @author Kevin Candia
 * 23-09-2020
 * 
 */
@RestController
@RequestMapping(Constants.END_USER)
public class UserSecurityController {

	private static final Logger LOG = LoggerFactory.getLogger(UserSecurityController.class.getName());

	private Util util = new Util(true);

	@Autowired
    private IEntityService iEntity;

	@GetMapping(path = Constants.SEARCH, produces = "application/json")
	public ResponseEntity<EntityDTO> findBy(@RequestParam(value = "entity", required = true) String entity) {
		LOG.info("*START - Controller findBy*");
		//Obtenemos la entidad por el tipo
		EntityDTO entityDTO = util.isLong(entity) ?
			iEntity.findByIdEntity(util.asLong(entity)) :
			iEntity.findByEmail(entity);
		//Validamos si la entidad sigue activa
		isActive(entityDTO);
		LOG.info("*FINISHED - Controller findBy*");
		return new ResponseEntity<>(entityDTO, util.typeStatus(entityDTO));
	}

	@PostMapping(path = Constants.SEARCH, produces = "application/json")
	public ResponseEntity<EntityDTO> newEntity(@Valid @RequestBody(required = true) EntityDTO entityDTO) {
		LOG.info("*START - Controller newEntity*");
		//Obtenemos la entidad por el tipo

		//Validamos si la entidad sigue activa
		isActive(entityDTO);
		LOG.info("*FINISHED - Controller findBy*");
		return new ResponseEntity<>(entityDTO, util.typeStatus(entityDTO));
	}

	private void isActive(EntityDTO entityDTO){
		if (entityDTO == null) return;
		util.isActive(entityDTO.getActive(), entityDTO.getNameEntity(), entityDTO.getLastEntity());
	}

}
