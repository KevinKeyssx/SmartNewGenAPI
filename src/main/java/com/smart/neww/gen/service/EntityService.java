/**
 * SmartNewGen exclusive class, all rights reserved
 */
package com.smart.neww.gen.service;

import com.smart.neww.gen.data.EntityDTO;
import com.smart.neww.gen.entity.EntitySNG;
import com.smart.neww.gen.interfaces.IEntity;
import com.smart.neww.gen.repository.IEntityRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.extern.log4j.Log4j2;

/**
 * @author Kevin Candia
 * @date   07-09-2020
 */
@Log4j2
@Service
public class EntityService implements IEntity {

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
        log.info("*START - fillEntityDTO");

        if (entity == null) {
            return null;
        }

        log.info("*FINISHED - fillEntityDTO");
        return new EntityDTO(
            entity.getIdEntity(),
            entity.getNameEntity(),
            entity.getLastEntity(),
            entity.getEmail(),
            entity.getCellPhone(),
            entity.getBirdDate(),
            entity.getDateArrive(),
            entity.getActive(),
            entity.getComment()
        );
    }

}
