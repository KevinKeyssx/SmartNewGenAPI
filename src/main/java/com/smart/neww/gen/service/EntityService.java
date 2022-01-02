/**
 * SmartNewGen exclusive class, all rights reserved
 */
package com.smart.neww.gen.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.smart.neww.gen.dto.EntityDTO;
import com.smart.neww.gen.entity.EntitySNG;
import com.smart.neww.gen.interfaces.IEntity;
import com.smart.neww.gen.repository.IEntityRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @author Kevin Candia
 * @date   07-09-2020
 */
@Service
public class EntityService implements IEntity {

    private static final Logger console = LoggerFactory.getLogger(EntityService.class.toString());

    @Autowired
    private IEntityRepository iEntityCategory;

    @Override
    public EntityDTO findByIdEntity(Long idEntity) {
        return fillEntityDTO(iEntityCategory.findByIdEntity(idEntity));
    }

    @Override
    public EntityDTO findByEmail(String email) {
        return fillEntityDTO(iEntityCategory.findByEmail(email));
    }

    private EntityDTO fillEntityDTO(EntitySNG entity) {
        console.info("*START - fillEntityDTO");

        if (entity == null) {
            return null;
        }

        return new EntityDTO(
            entity.getIdEntity(),
            entity.getNameEntity(),
            entity.getLastEntity(),
            entity.getEmail(),
            entity.getCellPhone(),
            entity.getBirdDate(),
            entity.getDateArrive(),
            entity.getIdLabelcategory().getDescription(),
            entity.getActive(),
            entity.getComment()
        );
    }

}
