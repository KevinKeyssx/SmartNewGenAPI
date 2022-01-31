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

import lombok.extern.log4j.Log4j2;

import com.smart.neww.gen.common.Constants;
import com.smart.neww.gen.common.Util;
import com.smart.neww.gen.dto.EntityLabelCategoryDTO;
import com.smart.neww.gen.interfaces.IEntityLabelCategory;

/**
 * @author Kevin Candia
 * @date 02-01-2022
 */
@Log4j2
@RestController
@RequestMapping(Constants.END_ENTITY_LABELCATEGORY)
public class EntityLabelCategoryController {

	@Autowired
	private IEntityLabelCategory iEntityLabelCategory;

	@GetMapping(path = Constants.SEARCH, produces = "application/json")
	public ResponseEntity<EntityLabelCategoryDTO> findByIdEntityLabelCategory(@RequestParam(value = "entityLabel", required = true) Long entity) {
		log.info("*START - Controller findByIdEntityLabelCategory*");
		var entityLabelCategoryDTO = iEntityLabelCategory.findByIdEntityLabelCategory(entity);
		log.info("*FINISHED - Controller findByIdEntityLabelCategory*");
		return new ResponseEntity<>(entityLabelCategoryDTO, new Util(true).typeStatus(entityLabelCategoryDTO));
	}

	@GetMapping(path = Constants.SEARCH_BY_ID, produces = "application/json")
	public ResponseEntity<EntityLabelCategoryDTO> findByIdEntity(@RequestParam(value = "entity", required = true) Long entity) {
		log.info("*START - Controller findByIdEntity*");
		var entityLabelCategoryDTO = iEntityLabelCategory.findByEntity(entity);
		log.info("*FINISHED - Controller findByIdEntity*");
		return new ResponseEntity<>(entityLabelCategoryDTO, new Util(true).typeStatus(entityLabelCategoryDTO));
	}

}