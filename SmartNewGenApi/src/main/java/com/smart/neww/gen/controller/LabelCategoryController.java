/**
 * SmartNewGen exclusive class, all rights reserved
 */
package com.smart.neww.gen.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.smart.neww.gen.dto.LabelCategotyDTO;
import com.smart.neww.gen.entity.LabelCategorySNG;
import com.smart.neww.gen.service.ILabelCategoryService;
import com.smart.neww.gen.util.Constants;

/**
 * @author Kevin Candia
 * 16-09-2020
 */
@RestController
@RequestMapping(Constants.END_LABEL_CATEGORY)
public class LabelCategoryController {

	@Autowired
	private ILabelCategoryService labelCategory;

	/*@GetMapping(path = Constants.SEARCH)
	public List<LabelCategotyDTO> findByIdLabel(@RequestParam(value = "number", required = true) Long number) {
		return labelCategory.findByIdLabel(number);
	}*/

}
