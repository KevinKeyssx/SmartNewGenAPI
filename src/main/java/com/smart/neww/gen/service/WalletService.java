/**
 * SmartNewGen exclusive class, all rights reserved
 */
package com.smart.neww.gen.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.smart.neww.gen.dto.WalletDTO;
import com.smart.neww.gen.entity.EntitySNG;
import com.smart.neww.gen.entity.WalletSNG;
import com.smart.neww.gen.interfaces.IWallet;
import com.smart.neww.gen.repository.IWalletRepository;
/**
 * @author Kevin Candia
 * @date   01-01-2022
 */
@Service
public class WalletService implements IWallet {

    private static final Logger console = LoggerFactory.getLogger(WalletService.class.toString());

    @Autowired
    private IWalletRepository walletRepository;

    @Override
    public WalletDTO findByEntity(EntitySNG entity) {
        return fillWalletDTO(walletRepository.findByEntity(entity));
    }

    private WalletDTO fillWalletDTO(WalletSNG entity) {
        console.info("*START - fillWalletDTO");

        if (entity == null ||
            entity.getEntity() == null ||
            entity.getEntity().getIdEntity() == null) {
                return null;
        }

        console.info("*FINISHED - fillWalletDTO");

        return new WalletDTO(
            entity.getIdWallet(),
            entity.getEntity(),
            entity.getSngMoney()
        );
    }
    
}