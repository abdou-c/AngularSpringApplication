package com.cashtransfert.transfertcash.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity
public class Recepteur {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;


    @Column
    private String nom;

    @Column
    private String prenom;

    @Column
    private String telephone;

    @Column
    private int cni;

    @JsonIgnore
    @OneToMany(mappedBy = "recepteur", fetch = FetchType.LAZY)
	private List<DetailEnvoie> detailEnvoieList;

    //Constructor avec argument
    public Recepteur(int id, String nom, String prenom, String telephone, int cni, List<DetailEnvoie> detailEnvoieList) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.telephone = telephone;
        this.cni = cni;
        this.detailEnvoieList = detailEnvoieList;
    }

    //Constructor sans argument
    public Recepteur() {

    }

    public Recepteur(int id, String nom, String prenom, String telephone, int cni) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.telephone = telephone;
        this.cni = cni;
    }

    //Getters and setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    public int getCni() {
        return cni;
    }

    public void setCni(int cni) {
        this.cni = cni;
    }

    public List<DetailEnvoie> getDetailEnvoieList() {
        return detailEnvoieList;
    }

    public void setDetailEnvoieList(List<DetailEnvoie> detailEnvoieList) {
        this.detailEnvoieList = detailEnvoieList;
    }
}
