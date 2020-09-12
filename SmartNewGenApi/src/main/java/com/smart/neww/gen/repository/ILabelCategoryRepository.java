package com.smart.neww.gen.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.smart.neww.gen.entity.LabelCategorySNG;

@Repository
public interface ILabelCategoryRepository extends JpaRepository<LabelCategorySNG, Long>{
	
	LabelCategorySNG findByIdLabel(@Param("idLabel") Long idLabeltest);

}
