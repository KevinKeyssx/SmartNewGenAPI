package com.smart.neww.gen.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.smart.neww.gen.dto.LabelCategotyDTO;
import com.smart.neww.gen.entity.LabelCategorySNG;
import com.smart.neww.gen.repository.ILabelCategoryRepository;
import com.smart.neww.gen.service.ILabelCategoryService;

@Service
public class LabelCategoryImpl implements ILabelCategoryService{

	@Autowired
	private ILabelCategoryRepository iLabelCategory;

	public List<LabelCategorySNG> findByIdLabel(Long idLabel) {
		return iLabelCategory.findByIdLabel(idLabel);
	}

	@Override
	public List<LabelCategorySNG> findAll() {
		return iLabelCategory.findAll();
	}

}
