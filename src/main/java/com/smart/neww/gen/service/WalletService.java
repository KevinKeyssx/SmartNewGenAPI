/**
 * SmartNewGen exclusive class, all rights reserved
 */
package com.smart.neww.gen.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.extern.log4j.Log4j2;

import java.util.ArrayList;

import com.smart.neww.gen.data.WalletDTO;
import com.smart.neww.gen.entity.EntitySNG;
import com.smart.neww.gen.entity.WalletSNG;
import com.smart.neww.gen.interfaces.IWallet;
import com.smart.neww.gen.repository.IWalletRepository;
/**
 * @author Kevin Candia
 * @date   01-01-2022
 */
@Log4j2
@Service
public class WalletService implements IWallet {

    @Autowired
    private IWalletRepository iWalletRepository;

    @Override
    public WalletDTO findByEntity(EntitySNG entity) {
        return fillWalletDTO(iWalletRepository.findByEntity(entity));
    }

    @Override
    public void save(WalletDTO walletDTO) {
        log.info("*START - save Wallet*");
		iWalletRepository.save(fillWalletSNG(walletDTO));
		log.info("*FINISHED - save Wallety*");
    }

    @Override
    public void deleteById(Long idWallet) {
        log.info("*START - deleteById Wallet*");
		iWalletRepository.deleteById(idWallet);
		log.info("*FINISHED - deleteById Wallet*");
    }

    private WalletDTO fillWalletDTO(WalletSNG entity) {
        log.info("*START - fillWalletDTO");
        if (entity == null ||
            entity.getEntity() == null ||
            entity.getEntity().getIdEntity() == null) {
                return null;
        }
    // TODO: Falta agregar las tarjetas relacionadas
        log.info("*FINISHED - fillWalletDTO");
        return new WalletDTO(
            entity.getIdWallet(),
            entity.getMoney(),
            // null
            new ArrayList<>(),
            entity.getEntity().getIdEntity()
        );
    }

    private WalletSNG fillWalletSNG(WalletDTO entity) {
        log.info("*START - fillWalletDTO");
        if (entity == null) {
            return null;
        }
        log.info("*FINISHED - fillWalletDTO");
        return new WalletSNG(
            entity.getIdWallet(),
            new EntitySNG(entity.getIdEntity()),
            entity.getMoney()
        );
    }

}