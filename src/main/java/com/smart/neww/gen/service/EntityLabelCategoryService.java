package com.smart.neww.gen.service;

import java.util.ArrayList;
import java.util.List;

import com.smart.neww.gen.data.EntityDTO;
import com.smart.neww.gen.data.EntityLabelCategoryDTO;
import com.smart.neww.gen.data.LabelCategoryDTO;
import com.smart.neww.gen.entity.EntityLabelCategorySNG;
import com.smart.neww.gen.entity.EntitySNG;
import com.smart.neww.gen.interfaces.IEntityLabelCategory;
import com.smart.neww.gen.repository.IEntityLabelCategoryRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.extern.log4j.Log4j2;
/**
 * @author Kevin Candia
 * @date 02-01-2022
 */
@Log4j2
@Service
public class EntityLabelCategoryService implements IEntityLabelCategory {

    @Autowired
	private IEntityLabelCategoryRepository iEntityLabelCategory;

    @Override
    public EntityLabelCategoryDTO findByIdEntityLabelCategory(Long idEntityLabelCategory) {
        log.info("START - findByIdEntityLabelCategory");
        var entityLabelCategory = iEntityLabelCategory.findByIdEntityLabelCategory(idEntityLabelCategory);
        var listEntity = new ArrayList<EntityLabelCategorySNG>();
        listEntity.add(entityLabelCategory);
        log.info("FINISHED - findByIdEntityLabelCategory");
        return fillEntityLabelCategorys(listEntity);
    }

    @Override
    public EntityLabelCategoryDTO findByEntity(Long idEntity) {
        log.info("START - findByEntity");
        var listEntity = iEntityLabelCategory.findByEntity(new EntitySNG(idEntity));
        log.info("FINISHED - findByEntity");
        return fillEntityLabelCategorys(listEntity);
    }

    private EntityLabelCategoryDTO fillEntityLabelCategorys(List<EntityLabelCategorySNG> entityLabelCategorys) {
        log.info("START - fillEntityLabelCategorys");
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
        log.info("FINISHED - fillEntityLabelCategorys");
        return new EntityLabelCategoryDTO(
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