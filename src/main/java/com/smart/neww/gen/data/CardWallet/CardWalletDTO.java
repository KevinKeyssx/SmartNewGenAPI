package com.smart.neww.gen.data.CardWallet;

import java.util.Date;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CardWalletDTO extends CardWallet {

    public CardWalletDTO(Long idCard, String descriptionCard, String numberCard, Date dueDate, String codeCard) {
        super(idCard, descriptionCard, numberCard, dueDate, codeCard);
        //TODO Auto-generated constructor stub
    }
    
}