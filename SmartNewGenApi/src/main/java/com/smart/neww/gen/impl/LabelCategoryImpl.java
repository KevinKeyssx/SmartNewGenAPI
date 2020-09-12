package com.smart.neww.gen.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.smart.neww.gen.entity.LabelCategorySNG;
import com.smart.neww.gen.repository.ILabelCategoryRepository;
import com.smart.neww.gen.service.ILabelCategoryService;

@Service
public class LabelCategoryImpl implements ILabelCategoryService{
	
	@Autowired
	private ILabelCategoryRepository iLabelCategory;

	public LabelCategorySNG findByIdLabel(Long idLabel) {
		System.out.println("FIND: " + iLabelCategory.findByIdLabel(idLabel) );
		return iLabelCategory.findByIdLabel(idLabel);
	}

	@Override
	public List<LabelCategorySNG> findAll() {
		System.out.println("FIND: " + iLabelCategory.findAll() );
		return iLabelCategory.findAll();
	}

}
