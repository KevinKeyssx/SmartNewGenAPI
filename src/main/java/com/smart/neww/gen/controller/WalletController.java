/**
 * SmartNewGen exclusive class, all rights reserved
 */
package com.smart.neww.gen.controller;

import com.smart.neww.gen.common.Constants;
import com.smart.neww.gen.common.Util;
import com.smart.neww.gen.data.WalletDTO;
import com.smart.neww.gen.entity.EntitySNG;
import com.smart.neww.gen.interfaces.IWallet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.log4j.Log4j2;
/**
 * @author Kevin Candia
 * @date 02-01-2022
 */
@Log4j2
@RestController
@RequestMapping(Constants.END_WALLET)
public class WalletController {

    @Autowired
	private IWallet iWallet;

    @GetMapping(path = Constants.SEARCH, produces = "application/json")
	public ResponseEntity<WalletDTO> findWallet(@RequestParam(value = "entity", required = true) Long entity) {
		log.info("*START - Controller findWallet*");
        var entitySNG = new EntitySNG(entity);
		var walletDTO = iWallet.findByEntity(entitySNG);
		log.info("*FINISHED - Controller findWallet*");
		return new ResponseEntity<>(walletDTO, new Util(true).typeStatus(walletDTO));
	}

}