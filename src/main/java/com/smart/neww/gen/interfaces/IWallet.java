package com.smart.neww.gen.interfaces;

import com.smart.neww.gen.dto.WalletDTO;
import com.smart.neww.gen.entity.EntitySNG;
/**
 * @author Kevin Candia
 * @date 02-01-2022
 */
public interface IWallet {

    public WalletDTO findByEntity(EntitySNG entity);

}
