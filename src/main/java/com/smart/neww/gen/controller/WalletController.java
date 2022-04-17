/**
 * SmartNewGen exclusive class, all rights reserved
 */
package com.smart.neww.gen.controller;

import java.util.Date;

import javax.validation.Valid;

import com.smart.neww.gen.common.Constants;
import com.smart.neww.gen.common.Util;
import com.smart.neww.gen.data.ResponseDTO;
import com.smart.neww.gen.data.WalletDTO;
import com.smart.neww.gen.entity.EntitySNG;
import com.smart.neww.gen.interfaces.IWallet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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

	@PostMapping(path =	Constants.SAVE, consumes = "application/json", produces = "application/json")
	public ResponseEntity<ResponseDTO> save(@Valid @RequestBody WalletDTO walletDTO) {
		log.info("*START - Controller save*");
		iWallet.save(walletDTO);
		log.info("*FINISHED - Controller save*");
		return new ResponseEntity<ResponseDTO>(new ResponseDTO(Constants.SUCCESS_SAVE_LABEL, new Date()), HttpStatus.CREATED);
	}

	@DeleteMapping(path = Constants.DELETE, produces = "application/json")
	public ResponseEntity<ResponseDTO> deleteById(@RequestParam(value = "labelId", required = true) Long labelId) {
		log.info("*START - Controller deleteById*");
		iWallet.deleteById(labelId);
		log.info("*FINISHED - Controller deleteById*");
		return new ResponseEntity<>(new ResponseDTO(Constants.SUCCESS_DELETE_LABEL, new Date()), HttpStatus.ACCEPTED);
	}

}