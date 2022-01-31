package com.smart.neww.gen.service;

import java.util.ArrayList;

import com.smart.neww.gen.dto.CardWalletDTO;
import com.smart.neww.gen.dto.WalletDTO;
import com.smart.neww.gen.entity.WalletSNG;
import com.smart.neww.gen.interfaces.ICardWallet;
import com.smart.neww.gen.repository.ICardWalletRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.extern.log4j.Log4j2;

/**
 * @author Kevin Candia
 * @date 02-01-2022
 */
@Log4j2
@Service
public class CardWalletService implements ICardWallet {

    @Autowired
	private ICardWalletRepository iCardWallet;

    @Override
    public WalletDTO findByIdWallet(Long idWallet) {
        log.info("*START - findByIdWallet*");
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
		log.info("*FINISHED - findByIdWallet*");
        return new WalletDTO(
			listCardWalletsSNG.get(0).getIdCard(),
			listCardWalletsSNG.get(0).getWallet().getSngMoney(),
            cardWalletsDto
		);
    }

}