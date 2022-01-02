package com.smart.neww.gen.interfaces;

import com.smart.neww.gen.dto.WalletDTO;
import com.smart.neww.gen.entity.EntitySNG;

public interface IWallet {

    public WalletDTO findByEntity(EntitySNG entity);

}
