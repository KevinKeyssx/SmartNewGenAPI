package com.smart.neww.gen.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.smart.neww.gen.entity.TestSNG;

@Repository
public interface ITestRepository extends JpaRepository<TestSNG, Long>{
	 

}
