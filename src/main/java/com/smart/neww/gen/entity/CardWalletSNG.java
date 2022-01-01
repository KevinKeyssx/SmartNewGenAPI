/**
 * SmartNewGen exclusive class, all rights reserved
 */
package com.smart.neww.gen.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

import com.smart.neww.gen.common.ConstantsDB;

/**
 * @author Kevin Candia
 * 09-03-2021
 */
@Data
@Entity
@Table(name = ConstantsDB.TABLE_WALLET, schema = ConstantsDB.SCHEMA)
public class CardWalletSNG {

    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "idscard", nullable = false)
    private Long idWallet;

}
