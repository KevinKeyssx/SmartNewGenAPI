/**
 * SmartNewGen exclusive class, all rights reserved
 */
package com.smart.neww.gen.interfaces;

import com.smart.neww.gen.dto.EntityDTO;

/**
 * @author Kevin Candia
 *         07-09-2020
 */
public interface IEntity {

    public EntityDTO findByIdEntity(Long idEntity);

    public EntityDTO findByEmail(String email);

}