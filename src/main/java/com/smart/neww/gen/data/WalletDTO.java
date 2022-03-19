package com.smart.neww.gen.data;

import java.io.Serializable;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
/**
 * @author Kevin Candia
 * @date 02-01-2022
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class WalletDTO implements Serializable {

    private Long idWallet;

	private Long sngMoney;

    private List<CardWalletDTO> cards;

    private static final long serialVersionUID = 1L;

}