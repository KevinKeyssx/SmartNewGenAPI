package com.smart.neww.gen.dto;

import java.io.Serializable;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class WalletDTO implements Serializable {

    private Long idWallet;

	private Long sngMoney;

    private List<CardWalletDTO> cards;

    private static final long serialVersionUID = 1L;

}