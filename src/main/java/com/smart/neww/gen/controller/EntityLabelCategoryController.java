/**
 * SmartNewGen exclusive class, all rights reserved
 */
package com.smart.neww.gen.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.smart.neww.gen.common.Constants;
import com.smart.neww.gen.common.Util;
import com.smart.neww.gen.dto.EntityLabelCategoryDTO;
import com.smart.neww.gen.interfaces.IEntityLabelCategory;

/**
 * @author Kevin Candia
 * @date 02-01-2022
 */
@RestController
@RequestMapping(Constants.END_ENTITY_LABELCATEGORY)
public class EntityLabelCategoryController {

    private static final Logger console = LoggerFactory.getLogger(LabelCategoryController.class.getName());

	@Autowired
	private IEntityLabelCategory iEntityLabelCategory;

	@GetMapping(path = Constants.SEARCH, produces = "application/json")
	public ResponseEntity<EntityLabelCategoryDTO> findByEntity(@RequestParam(value = "entity", required = true) Long entity) {
		console.info("*START - Controller findByEntity*");
		EntityLabelCategoryDTO entityLabelCategoryDTO = iEntityLabelCategory.findByEntity(entity);
		console.info("*FINISHED - Controller findByEntity*");
		return new ResponseEntity<>(entityLabelCategoryDTO, new Util(true).typeStatus(entityLabelCategoryDTO));
	}

}