package com.smart.neww.gen.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.smart.neww.gen.common.Constants;
import com.smart.neww.gen.common.Util;
import com.smart.neww.gen.dto.WalletDTO;
import com.smart.neww.gen.entity.EntitySNG;
import com.smart.neww.gen.interfaces.IWallet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(Constants.END_WALLET)
public class WalletController {

    private static final Logger console = LoggerFactory.getLogger(LabelCategoryController.class.getName());

    @Autowired
	private IWallet iWallet;

    @GetMapping(path = Constants.SEARCH, produces = "application/json")
	public ResponseEntity<WalletDTO> findWallet(@RequestParam(value = "entity", required = true) Long entity) {
		console.info("*START - Controller findWallet*");
        var entitySNG = new EntitySNG(entity);
		var walletDTO = iWallet.findByEntity(entitySNG);
		console.info("*FINISHED - Controller findWallet*");
		return new ResponseEntity<>(walletDTO, new Util(true).typeStatus(walletDTO));
	}

}