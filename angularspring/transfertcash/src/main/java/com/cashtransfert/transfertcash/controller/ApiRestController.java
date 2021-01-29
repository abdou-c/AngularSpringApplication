package com.cashtransfert.transfertcash.controller;

import com.cashtransfert.transfertcash.dao.IDetail;
import com.cashtransfert.transfertcash.dao.IEmetteur;
import com.cashtransfert.transfertcash.dao.IRecepteur;
import com.cashtransfert.transfertcash.entities.DetailEnvoie;
import com.cashtransfert.transfertcash.entities.Emetteur;
import com.cashtransfert.transfertcash.entities.Recepteur;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@CrossOrigin("*")
@RestController
public class ApiRestController {
    @Autowired
    private IDetail iDetaildao;

    @Autowired
    private IEmetteur iEmetteurdao;

    @Autowired
    private IRecepteur iRecepteurdao;

    //liste des envoies
    @GetMapping(value = "/DetailEnvoie")
    private List<DetailEnvoie> detailEnvoieList() {
        return this.iDetaildao.findAll();
    }

    //detail envoie ajoutes
    @PostMapping(value = "/Envoie/Add")
    private DetailEnvoie addDetailEnvoie(@RequestBody DetailEnvoie detailEnvoie) {
        return this.iDetaildao.save(detailEnvoie);
    }

    //liste des emetteurs
        @GetMapping(value = "/ListeEmetteur")
    private List<Emetteur> emetteurs() {
        return this.iEmetteurdao.findAll();
    }

    //Emetteurs ajoutes
    @PostMapping(value = "/Emetteur/Add")
    private Emetteur addEmetteur(@RequestBody Emetteur emetteur) {

        return this.iEmetteurdao.save(emetteur);
    }

    //liste des recepteurs
    @GetMapping(value = "/ListeRecepteur")
    private List<Recepteur> recepteurs() {
        return this.iRecepteurdao.findAll();
    }

    //Recepteurs ajoutes
    @PostMapping(value = "/Recepteur/Add")
    private Recepteur addRecepteur(@RequestBody Recepteur recepteur) {
        return this.iRecepteurdao.save(recepteur);
    }
    
   /* @GetMapping("/EditEmetteur/{id}")
    public ResponseEntity<Emetteur> get(@PathVariable("id") long id) {
        Emetteur emetteur = IEmetteur.findById(id);
        return new ResponseEntity<Emetteur>(emetteur, HttpStatus.OK);
    };*/


}
