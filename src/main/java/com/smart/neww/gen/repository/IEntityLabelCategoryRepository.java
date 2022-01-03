package com.smart.neww.gen.repository;

import com.smart.neww.gen.entity.EntityLabelCategorySNG;
import com.smart.neww.gen.entity.EntitySNG;
import com.smart.neww.gen.entity.LabelCategorySNG;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

/**
 * @author Kevin Candia
 * 07-09-2020
 */
@Repository
public interface IEntityLabelCategoryRepository extends JpaRepository<EntityLabelCategorySNG, Long> {

    public EntityLabelCategorySNG findByIdEntityLabelCategory(@Param("idEntityLabelCategory") Long idEntityLabelCategory);

    public EntityLabelCategorySNG findByEntity(@Param("entity") EntitySNG idEntity);

    public EntityLabelCategorySNG findByLabelCategory(@Param("idEntityLabelCategory") LabelCategorySNG idEntityLabelCategory);

}