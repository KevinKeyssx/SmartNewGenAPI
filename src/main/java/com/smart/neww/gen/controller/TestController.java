package com.smart.neww.gen.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.smart.neww.gen.entity.TestSNG;
import com.smart.neww.gen.service.ITestService;
import com.smart.neww.gen.util.Constants;

@RestController
@RequestMapping(Constants.END_TEST)
public class TestController {

	@Autowired
	ITestService testService;
	
	/*@GetMapping(path = Constants.SEARCH)
	public List<TestSNG> searchByIdLabel(){
		return testService.findAll();
	}*/
	
	@GetMapping(path = Constants.SEARCH)
	public List<TestSNG> test(){
		
		
		
		
		
		return testService.findAll();
	}
	
}
