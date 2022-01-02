package com.smart.neww.gen.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Date;

import com.smart.neww.gen.common.Constants;
import com.smart.neww.gen.common.Util;
import com.smart.neww.gen.dto.EntityDTO;
import com.smart.neww.gen.dto.ResponseDTO;
import com.smart.neww.gen.entity.EntitySNG;
import com.smart.neww.gen.interfaces.IEntity;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Kevin Candia
 * @date 01-01-2022
 */
@RestController
@RequestMapping(Constants.END_ENTITY)
public class EntityController {

    private static final Logger console = LoggerFactory.getLogger(LabelCategoryController.class.getName());

    @Autowired
	private IEntity iEntity;

    @GetMapping(path = Constants.SEARCH, produces = "application/json")
	public ResponseEntity<Object> findIdEntity(@RequestParam(value = "entity", required = true) Long entity) {
		console.info("*START - Controller findWallet*");
        var entitySNG = new EntitySNG(entity);
		var entityDTO = iEntity.findByIdEntity(entity);
		console.info("*FINISHED - Controller findWallet*");
		return new ResponseEntity<>(entityDTO, new Util(true).typeStatus(entityDTO));
	}

    // @GetMapping(path = Constants.SEARCH, produces = "application/json")
	// public ResponseEntity<EntityDTO> findEmailEntity(@RequestParam(value = "email", required = true) String email) {
	// 	console.info("*START - Controller findWallet*");
    //     // var entitySNG = new EntitySNG(idEntity);
	// 	var entityDTO = iEntity.findByEmail(email);
	// 	console.info("*FINISHED - Controller findWallet*");
	// 	return new ResponseEntity<>(entityDTO, new Util(true).typeStatus(entityDTO));
	// }

}