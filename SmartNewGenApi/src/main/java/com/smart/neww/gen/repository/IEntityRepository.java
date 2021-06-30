/**
 * SmartNewGen exclusive class, all rights reserved
 */
package com.smart.neww.gen.repository;

import com.smart.neww.gen.entity.EntitySNG;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

/**
 * @author Kevin Candia
 * 07-09-2020
 */
@Repository
public interface IEntityRepository extends JpaRepository<EntitySNG, Long> {

    EntitySNG findByIdEntity(@Param("idEntity") Long idEntity);

    EntitySNG findByEmail(@Param("email") String email);

}
