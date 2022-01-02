package com.smart.neww.gen.dto;

import java.io.Serializable;

import com.smart.neww.gen.entity.EntitySNG;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class WalletDTO implements Serializable {

    private Long idWallet;

    private EntitySNG entity;

	private Long sngMoney;

    private static final long serialVersionUID = 1L;

}