package com.smart.neww.gen.data;

import java.io.Serializable;
import java.util.List;

import com.smart.neww.gen.entity.EntitySNG;

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

    public WalletDTO(Long idWallet, Long money, Long idEntity) {
        this.idWallet = idWallet;
        this.money = money;
        this.idEntity = idEntity;
    }

    public WalletDTO(Long idWallet, Long money, List<CardWalletDTO> cards) {
        this.idWallet = idWallet;
        this.money = money;
        this.cards = cards;
    }

    private Long idWallet;

	private Long money;

    private List<CardWalletDTO> cards;

    private Long idEntity;

    private static final long serialVersionUID = 1L;

}