package com.smart.neww.gen.impl;

import java.util.ArrayList;
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

	public List<LabelCategotyDTO> findByIdLabel(Long idLabel) {
		List<LabelCategotyDTO> labelCategorysDto = new ArrayList<>();
		List<LabelCategorySNG> labelCategorysSNG = iLabelCategory.findByIdLabel(idLabel);
		
		for (LabelCategorySNG labelCategoryssSNG : labelCategorysSNG) {
			labelCategorysDto.add(new LabelCategotyDTO(
				labelCategoryssSNG.getIdLabel(),
				labelCategoryssSNG.getIdLabelCategoty(),
				labelCategoryssSNG.getDescription(),
				labelCategoryssSNG.getActive(),
				labelCategoryssSNG.getSkills(),
				labelCategoryssSNG.getComment()
			));
		}
		
		return labelCategorysDto;
	}

	@Override
	public List<LabelCategotyDTO> findAll() {
		//return iLabelCategory.findAll();
		return null;
	}

}
