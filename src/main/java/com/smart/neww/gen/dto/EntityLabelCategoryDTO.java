package com.smart.neww.gen.dto;

import java.io.Serializable;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class EntityLabelCategoryDTO implements Serializable {

    private Long idEntityLabelCategory;

	private EntityDTO entity;

	private List<LabelCategoryDTO> labelCategorys;

	private static final long serialVersionUID = 1L;

}