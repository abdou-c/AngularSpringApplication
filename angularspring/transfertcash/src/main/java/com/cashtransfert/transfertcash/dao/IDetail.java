package com.cashtransfert.transfertcash.dao;

import com.cashtransfert.transfertcash.entities.DetailEnvoie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface IDetail extends JpaRepository<DetailEnvoie, Integer> {

}
