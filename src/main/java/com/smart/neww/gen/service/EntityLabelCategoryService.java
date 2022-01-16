package com.smart.neww.gen.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.ArrayList;
import java.util.List;

import com.smart.neww.gen.dto.EntityDTO;
import com.smart.neww.gen.dto.EntityLabelCategoryDTO;
import com.smart.neww.gen.dto.LabelCategoryDTO;
import com.smart.neww.gen.entity.EntityLabelCategorySNG;
import com.smart.neww.gen.entity.EntitySNG;
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
        console.info("START - findByIdEntityLabelCategory");
        var entityLabelCategory = iEntityLabelCategory.findByIdEntityLabelCategory(idEntityLabelCategory);
        var listEntity = new ArrayList<EntityLabelCategorySNG>();
        listEntity.add(entityLabelCategory);
        console.info("FINISHED - findByIdEntityLabelCategory");
        return fillEntityLabelCategorys(listEntity);
    }

    @Override
    public EntityLabelCategoryDTO findByEntity(Long idEntity) {
        console.info("START - findByEntity");
        var listEntity = iEntityLabelCategory.findByEntity(new EntitySNG(idEntity));
        console.info("FINISHED - findByEntity");
        return fillEntityLabelCategorys(listEntity);
    }

    private EntityLabelCategoryDTO fillEntityLabelCategorys(List<EntityLabelCategorySNG> entityLabelCategorys) {
        console.info("START - fillEntityLabelCategorys");
        if (entityLabelCategorys == null || entityLabelCategorys.size() == 0) {
            return null;
        }

        var labelCategorys = new ArrayList<LabelCategoryDTO>();

        for (var entityLabelCategory : entityLabelCategorys) {
            labelCategorys.add(new LabelCategoryDTO(
                entityLabelCategory.getLabelCategory().getIdLabelCategory(),
                entityLabelCategory.getLabelCategory().getDescription(),
                entityLabelCategory.getLabelCategory().getActive(),
                entityLabelCategory.getLabelCategory().getComment(),
                entityLabelCategory.getLabelCategory().getSkills())
            );
        }
        console.info("FINISHED - fillEntityLabelCategorys");
        return new EntityLabelCategoryDTO(
            entityLabelCategorys.get(0).getIdEntityLabelCategory(),
            new EntityDTO(
                entityLabelCategorys.get(0).getEntity().getIdEntity(),
                entityLabelCategorys.get(0).getEntity().getNameEntity(),
                entityLabelCategorys.get(0).getEntity().getLastEntity(),
                entityLabelCategorys.get(0).getEntity().getEmail(),
                entityLabelCategorys.get(0).getEntity().getCellPhone(),
                entityLabelCategorys.get(0).getEntity().getBirdDate(),
                entityLabelCategorys.get(0).getEntity().getDateArrive(),
                entityLabelCategorys.get(0).getEntity().getActive(),
                entityLabelCategorys.get(0).getEntity().getComment()
            ),
            labelCategorys
        );
    }

}