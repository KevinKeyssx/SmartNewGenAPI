/**
 * SmartNewGen exclusive class, all rights reserved
 */
package com.smart.neww.gen.repository;

import com.smart.neww.gen.entity.WalletSNG;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * @author Kevin Candia
 * 22-09-2020
 */
@Repository
public interface IWalletRepository extends JpaRepository<WalletSNG, Long>{

}
