/**
 * SmartNewGen exclusive class, all rights reserved
 */
package com.smart.neww.gen.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.extern.log4j.Log4j2;

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
    private IWalletRepository walletRepository;

    @Override
    public WalletDTO findByEntity(EntitySNG entity) {
        return fillWalletDTO(walletRepository.findByEntity(entity));
    }

    private WalletDTO fillWalletDTO(WalletSNG entity) {
        log.info("*START - fillWalletDTO");

        if (entity == null ||
            entity.getEntity() == null ||
            entity.getEntity().getIdEntity() == null) {
                return null;
        }

        log.info("*FINISHED - fillWalletDTO");

        return new WalletDTO(
            entity.getIdWallet(),
            entity.getSngMoney(),
            null
        );
    }

}