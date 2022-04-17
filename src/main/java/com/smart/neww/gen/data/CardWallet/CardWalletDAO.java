package com.smart.neww.gen.data.CardWallet;

import java.util.Date;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CardWalletDAO extends CardWallet {

    public CardWalletDAO(Long idCard, String descriptionCard, String numberCard, Date dueDate, String codeCard) {
        super(idCard, descriptionCard, numberCard, dueDate, codeCard);
    }

    private Long idWallet;

}