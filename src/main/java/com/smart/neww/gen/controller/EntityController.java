/**
 * SmartNewGen exclusive class, all rights reserved
 */
package com.smart.neww.gen.controller;

import com.smart.neww.gen.common.Constants;
import com.smart.neww.gen.common.Util;
import com.smart.neww.gen.data.EntityDTO;
import com.smart.neww.gen.interfaces.IEntity;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.log4j.Log4j2;

/**
 * @author Kevin Candia
 * @date 01-01-2022
 */
@Log4j2
@RestController
@RequestMapping(Constants.END_ENTITY)
public class EntityController {

    @Autowired
	private IEntity iEntity;

    @GetMapping(path = Constants.SEARCH_BY_ID, produces = "application/json")
	public ResponseEntity<EntityDTO> findIdEntity(@RequestParam(value = "entity", required = true) Long entity) {
		log.info("*START - Controller findIdEntity*");
		var entityDTO = iEntity.findByIdEntity(entity);
		log.info("*FINISHED - Controller findIdEntity*");
		return new ResponseEntity<>(entityDTO, new Util(true).typeStatus(entityDTO));
	}

    @GetMapping(path = Constants.SEARCH, produces = "application/json")
	public ResponseEntity<EntityDTO> findEmailEntity(@RequestParam(value = "email", required = true) String email) {
		log.info("*START - Controller findEmailEntity*");
		var entityDTO = iEntity.findByEmail(email);
		log.info("*FINISHED - Controller findEmailEntity*");
		return new ResponseEntity<>(entityDTO, new Util(true).typeStatus(entityDTO));
	}

}