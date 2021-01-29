package com.cashtransfert.transfertcash.dao;

import com.cashtransfert.transfertcash.entities.Emetteur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface IEmetteur extends JpaRepository<Emetteur, Integer> {

}
