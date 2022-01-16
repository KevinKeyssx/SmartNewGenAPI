/**
 * SmartNewGen exclusive class, all rights reserved
 */
package com.smart.neww.gen.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.smart.neww.gen.common.ConstantsDB;

import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author Kevin Candia
 * 07-09-2020
 */
@Data
@NoArgsConstructor
@Entity
@Table(name = ConstantsDB.TABLE_WALLET, schema = ConstantsDB.SCHEMA)
public class WalletSNG implements Serializable{

    public WalletSNG(Long idWallet) {
        this.idWallet = idWallet;
    }

    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "idswallet", nullable = false)
    private Long idWallet;

    @OneToOne
	@JoinColumn(name = "idsentity", nullable = false)
    private EntitySNG entity;

    @Column(name = "smoneysng", nullable = true)
	private Long sngMoney;

    private static final long serialVersionUID = 1L;

}
