/**
 * SmartNewGen exclusive class, all rights reserved
 */
package com.smart.neww.gen.interfaces;

import com.smart.neww.gen.data.CardWalletDTO;
import com.smart.neww.gen.data.WalletDTO;

/**
 * @author Kevin Candia
 * @date 02-01-2022
 */
public interface ICardWallet {

    public WalletDTO findByIdWallet(Long idWallet);

    public void save(CardWalletDTO cardWallet);

	public void deleteById(Long idCard);

}