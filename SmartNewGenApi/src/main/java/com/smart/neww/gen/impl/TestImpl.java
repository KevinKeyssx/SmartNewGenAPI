package com.smart.neww.gen.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.smart.neww.gen.entity.TestSNG;
import com.smart.neww.gen.repository.ITestRepository;
import com.smart.neww.gen.service.ITestService;

@Service
public class TestImpl implements ITestService {
	
	@Autowired
	ITestRepository testRepo;

	@Override
	public List<TestSNG> findAll() {
		return testRepo.findAll();
	}

}
