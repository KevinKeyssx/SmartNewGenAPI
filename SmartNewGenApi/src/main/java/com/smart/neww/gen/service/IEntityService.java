/**
 * SmartNewGen exclusive class, all rights reserved
 */
package com.smart.neww.gen.service;

import java.util.List;

import com.smart.neww.gen.dto.EntityDTO;
/**
 * @author Kevin Candia
 * 07-09-2020
 */
public interface IEntityService {

    public EntityDTO findByIdEntity(Long idEntity);

    public List<EntityDTO> findAll();

}
