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
 *         07-09-2020wa
 */
@Service
public class EntityService implements IEntity {

    private static final Logger LOG = LoggerFactory.getLogger(IEntity.class.toString());

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
        LOG.info("*START - fillEntityDTO");

        if (entity == null) {
            return null;
        }

        return new EntityDTO(
            entity.getIdEntity(),
            entity.getNameEntity(),
            entity.getLastEntity(),
            entity.getPoints(),
            entity.getEmail(),
            entity.getTelephone(),
            entity.getBirdDate(),
            entity.getDaterArrive(),
            entity.getIdLabelcategory().getDescription(),
            entity.getActive(),
            entity.getComment()
        );
    }

}
