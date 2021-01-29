package com.cashtransfert.transfertcash.entities;

import javax.persistence.*;

@Entity
public class DetailEnvoie {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column
    private String montant;

    @Column
    private String dateEnvoie;

    /*@JsonIgnore*/
    @ManyToOne(targetEntity = Emetteur.class)
    private Emetteur emetteur;

    /*@JsonIgnore*/
    @ManyToOne(targetEntity = Recepteur.class)
    private Recepteur recepteur;

    //Constructor sans argument
    public DetailEnvoie() {
    }

    //Constructor avec argument
    public DetailEnvoie(int id, String montant, String dateEnvoie, Emetteur emetteur, Recepteur recepteur) {
        this.id = id;
        this.montant = montant;
        this.dateEnvoie = dateEnvoie;
        this.emetteur = emetteur;
        this.recepteur = recepteur;
    }

    public DetailEnvoie(int id, String montant, String dateEnvoie) {
        this.id = id;
        this.montant = montant;
        this.dateEnvoie = dateEnvoie;
        this.emetteur = emetteur;
        this.recepteur = recepteur;
    }

    //Getters and Setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getMontant() {
        return montant;
    }

    public void setMontant(String montant) {
        this.montant = montant;
    }

    public String getDateEnvoie() {
        return dateEnvoie;
    }

    public void setDateEnvoie(String dateEnvoie) {
        this.dateEnvoie = dateEnvoie;
    }

    public Emetteur getEmetteur() {
        return emetteur;
    }

    public void setEmetteur(Emetteur emetteur) {
        this.emetteur = emetteur;
    }

    public Recepteur getRecepteur() {
        return recepteur;
    }

    public void setRecepteur(Recepteur recepteur) {
        this.recepteur = recepteur;
    }
}

