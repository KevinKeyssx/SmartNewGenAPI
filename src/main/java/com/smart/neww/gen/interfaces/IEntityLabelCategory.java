package com.smart.neww.gen.interfaces;

import com.smart.neww.gen.dto.EntityLabelCategoryDTO;
/**
 * @author Kevin Candia
 * @date 02-01-2022
 */
public interface IEntityLabelCategory {

    public EntityLabelCategoryDTO findByIdEntityLabelCategory(Long idEntityLabelCategory);

    public EntityLabelCategoryDTO findByEntity(Long idEntity);

}