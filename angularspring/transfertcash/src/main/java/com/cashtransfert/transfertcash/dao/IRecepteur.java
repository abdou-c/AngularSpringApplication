package com.cashtransfert.transfertcash.dao;

import com.cashtransfert.transfertcash.entities.Recepteur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;


@RepositoryRestResource
public interface IRecepteur extends JpaRepository<Recepteur, Integer> {

}
