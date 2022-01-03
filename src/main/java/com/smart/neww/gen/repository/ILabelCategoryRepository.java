/**
 * SmartNewGen exclusive class, all rights reserved
 */
package com.smart.neww.gen.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.smart.neww.gen.entity.LabelCategorySNG;
import com.smart.neww.gen.entity.LabelSNG;

/**
 * @author Kevin Candia
 * 07-09-2020
 */
@Repository
public interface ILabelCategoryRepository extends JpaRepository<LabelCategorySNG, Long> {

	public List<LabelCategorySNG> findByLabels(@Param("idsLabel") LabelSNG idsLabel);

	// public List<LabelCategorySNG> findByIdLabelCategory(@Param("idsLabel") Long idsLabel);

}
