package com.smart.neww.gen.service;

import java.util.ArrayList;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.smart.neww.gen.dto.CardWalletDTO;
import com.smart.neww.gen.dto.WalletDTO;
import com.smart.neww.gen.entity.WalletSNG;
import com.smart.neww.gen.interfaces.ICardWallet;
import com.smart.neww.gen.repository.ICardWalletRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @author Kevin Candia
 * @date 02-01-2022
 */
@Service
public class CardWalletService implements ICardWallet {

    @Autowired
	private ICardWalletRepository iCardWallet;

	private static final Logger console = LoggerFactory.getLogger(CardWalletService.class.toString());

    @Override
    public WalletDTO findByIdWallet(Long idWallet) {
        console.info("*START - findByIdWallet*");
        // Obtenemos todos los datos de las etiquetas
		var listCardWalletsSNG = iCardWallet.findByWallet(new WalletSNG(idWallet));
		// Si no encuentra coincidencias
		if (listCardWalletsSNG == null || listCardWalletsSNG.isEmpty()) {
            return null;
		}
        var cardWalletsDto  = new ArrayList<CardWalletDTO>();
		// Cargamos los valores de la categoria de la etiqueta
		for (var cardWalletSNG : listCardWalletsSNG) {
			cardWalletsDto.add(new CardWalletDTO(
				cardWalletSNG.getIdCard(),
				cardWalletSNG.getDescriptionCard(),
				cardWalletSNG.getNumberCard(),
				cardWalletSNG.getDueDate(),
				cardWalletSNG.getCodeCard())
			);
		}
        return new WalletDTO(
			listCardWalletsSNG.get(0).getIdCard(),
			listCardWalletsSNG.get(0).getWallet().getSngMoney(),
            cardWalletsDto
		);
    }

}