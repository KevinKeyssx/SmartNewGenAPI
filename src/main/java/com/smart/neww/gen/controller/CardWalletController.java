/**
 * SmartNewGen exclusive class, all rights reserved
 */
package com.smart.neww.gen.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.log4j.Log4j2;

import com.smart.neww.gen.common.Constants;
import com.smart.neww.gen.common.Util;
import com.smart.neww.gen.data.WalletDTO;
import com.smart.neww.gen.interfaces.ICardWallet;

/**
 * @author Kevin Candia
 * @date 02-01-2022
 */
@CrossOrigin
@Log4j2
@RestController
@RequestMapping(Constants.END_CARD_WALLET)
public class CardWalletController {

	@Autowired
	private ICardWallet iCardWallet;

	@GetMapping(path = Constants.SEARCH_BY_ID, produces = "application/json")
	public ResponseEntity<WalletDTO> findByWallet(@RequestParam(value = "wallet", required = true) Long wallet) {
		log.info("*START - Controller findByWallet*");
		var walletDTO = iCardWallet.findByIdWallet(wallet);
		log.info("*FINISHED - Controller findByWallet*");
		return new ResponseEntity<>(walletDTO, new Util(true).typeStatus(walletDTO));
	}

}