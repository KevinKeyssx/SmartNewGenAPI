/**
 * SmartNewGen exclusive class, all rights reserved
 */
package com.smart.neww.gen.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.smart.neww.gen.entity.LabelSNG;

/**
 * @author Kevin Candia
 * 22-09-2020
 */
@Repository
public interface ILabelRepository extends JpaRepository<LabelSNG, Long>{
	
	LabelSNG findByIdLabel(@Param("idLabel") Long idLabeltest);

}
