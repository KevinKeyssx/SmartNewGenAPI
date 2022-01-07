package com.smart.neww.gen.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.ArrayList;

import com.smart.neww.gen.dto.EntityDTO;
import com.smart.neww.gen.dto.EntityLabelCategoryDTO;
import com.smart.neww.gen.dto.LabelCategoryDTO;
import com.smart.neww.gen.entity.EntityLabelCategorySNG;
import com.smart.neww.gen.entity.EntitySNG;
import com.smart.neww.gen.entity.LabelCategorySNG;
import com.smart.neww.gen.interfaces.IEntityLabelCategory;
import com.smart.neww.gen.repository.IEntityLabelCategoryRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
/**
 * @author Kevin Candia
 * @date 02-01-2022
 */
@Service
public class EntityLabelCategoryService implements IEntityLabelCategory {

    @Autowired
	private IEntityLabelCategoryRepository iEntityLabelCategory;

	private static final Logger console = LoggerFactory.getLogger(EntityLabelCategoryService.class.toString());

    @Override
    public EntityLabelCategoryDTO findByIdEntityLabelCategory(Long idEntityLabelCategory) {
        return null;
    }

    @Override
    public EntityLabelCategoryDTO findByEntity(Long idEntity) {
        console.info("START - findByEntity");
        EntitySNG entitySNG = new EntitySNG(idEntity);
        return fillEntityCategory(iEntityLabelCategory.findByEntity(entitySNG));
    }

    @Override
    public EntityLabelCategoryDTO findByLabelCategory(Long idEntityLabelCategory) {
        return null;
    }

    private EntityLabelCategoryDTO fillEntityCategory(EntityLabelCategorySNG entityLabelCategory) {
        console.info("RETURN ENTITYLABELCATEGORY:" + entityLabelCategory);
        // var entityDTO = new EntityDTO(
        //     entityLabelCategory.getEntity().getIdEntity(),
        //     entityLabelCategory.getEntity().getNameEntity(),
        //     entityLabelCategory.getEntity().getLastEntity(),
        //     entityLabelCategory.getEntity().getEmail(),
        //     entityLabelCategory.getEntity().getCellPhone(),
        //     entityLabelCategory.getEntity().getBirdDate(),
        //     entityLabelCategory.getEntity().getDateArrive(),
        //     entityLabelCategory.getEntity().getActive(),
        //     entityLabelCategory.getEntity().getComment()
        // );

        // var labelCategorysDto = new ArrayList<LabelCategoryDTO>();
		// // Cargamos los valores de la categoria de la etiqueta
		// for (LabelCategorySNG labelCategoryssSNG : entityLabelCategory.getLabelCategory()) {
		// 	labelCategorysDto.add(new LabelCategoryDTO(
		// 		labelCategoryssSNG.getIdLabelCategory(),
		// 		labelCategoryssSNG.getDescription(),
		// 		labelCategoryssSNG.getActive(),
		// 		labelCategoryssSNG.getComment(),
		// 		labelCategoryssSNG.getSkills())
		// 	);
		// }

        // return new EntityLabelCategoryDTO(
        //     entityLabelCategory.getIdEntityLabelCategory(),
        //     entityDTO,
        //     null
        // );

        return null;
    }

}