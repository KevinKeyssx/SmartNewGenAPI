/**
 * SmartNewGen exclusive class, all rights reserved
 */
package com.smart.neww.gen.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import com.smart.neww.gen.common.ConstantsDB;

/**
 * @author Kevin Candia
 * 09-03-2021
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = ConstantsDB.TABLE_CARD_WALLET, schema = ConstantsDB.SCHEMA)
public class CardWalletSNG implements Serializable {

    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "idscard", nullable = false)
    private Long idCard;

    @ManyToOne
    @JoinColumn(name = "idswallet")
    private WalletSNG wallet;

    @Column(name = "sdesccard", nullable = false, length = 100)
    private String descriptionCard;

    @Column(name = "snumbercard", nullable = false, length = 255, unique = true)
    private String numberCard;

    @Temporal(TemporalType.DATE)
    @Column(name = "sduedate", nullable = false)
    private Date dueDate;

    @Column(name = "scodecard", nullable = false, length = 255)
    private String codeCard;

    private static final long serialVersionUID = 1L;

}
