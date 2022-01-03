/**
 * SmartNewGen exclusive class, all rights reserved
 */
package com.smart.neww.gen.dto;

import java.io.Serializable;
import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
/**
 * @author Kevin Candia
 * @date 02-02-2022
 */
@Data
@AllArgsConstructor
public class CardWalletDTO implements Serializable {

    private Long idCard;

    // private WalletDTO wallet;

    private String descriptionCard;

    private String numberCard;

    private Date dueDate;

    private String codeCard;

    private static final long serialVersionUID = 1L;

}