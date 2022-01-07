package com.smart.neww.gen.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.smart.neww.gen.common.Constants;
import com.smart.neww.gen.common.Util;
import com.smart.neww.gen.dto.WalletDTO;
import com.smart.neww.gen.interfaces.ICardWallet;

/**
 * @author Kevin Candia
 * @date 02-01-2022
 */
@RestController
@RequestMapping(Constants.END_CARD_WALLET)
public class CardWalletController {

    private static final Logger LOG = LoggerFactory.getLogger(LabelCategoryController.class.getName());

	@Autowired
	private ICardWallet iCardWallet;

	@GetMapping(path = Constants.SEARCH, produces = "application/json")
	public ResponseEntity<WalletDTO> findByWallet(@RequestParam(value = "wallet", required = true) Long wallet) {
		LOG.info("*START - Controller findByWallet*");
		var walletDTO = iCardWallet.findByIdWallet(wallet);
		LOG.info("*FINISHED - Controller findByWallet*");
		return new ResponseEntity<>(walletDTO, new Util(true).typeStatus(walletDTO));
	}

}