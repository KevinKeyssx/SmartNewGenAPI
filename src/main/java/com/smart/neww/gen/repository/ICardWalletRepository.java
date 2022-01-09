package com.smart.neww.gen.repository;

import java.util.List;

import com.smart.neww.gen.entity.CardWalletSNG;
import com.smart.neww.gen.entity.WalletSNG;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

/**
 * @author Kevin Candia
 * 07-09-2020
 */
@Repository
public interface ICardWalletRepository extends JpaRepository<CardWalletSNG, Long> {

    public List<CardWalletSNG> findByWallet(@Param("idsWallet") WalletSNG idsWallet);

}