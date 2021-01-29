import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Emetteur } from 'src/app/entities/emetteur';
import { Recepteur } from 'src/app/entities/recepteur';
import { EmetteurService } from 'src/app/services/emetteur.service';
import { RecepteurService } from 'src/app/services/recepteur.service';
import {DetailService} from '../../services/detail.service';
import {Detail} from '../../entities/detail';


@Component({
  selector: 'app-add-emetteur',
  templateUrl: './add-emetteur.component.html',
  styleUrls: ['./add-emetteur.component.css']
})
export class AddEmetteurComponent implements OnInit {
  emetteur: Emetteur = new Emetteur();
  recepteur: Recepteur = new Recepteur();
  detail: Detail = new Detail();

  constructor(private _emetteurService: EmetteurService,
    private _recepteurService: RecepteurService,
    private _detailService: DetailService,
    private _router: Router
    ) { }

  ngOnInit(): void {
  //  const isIdPresent = this._activatedRoute.snapshot.paramMap.has('id');

  //  if(isIdPresent){
  //   const id = +this._activatedRoute.snapshot.paramMap.get('id');
  //    this._emetteurService.getEmetteur(id).subscribe(
  //      data => this.emetteur = data
  //    )
  //  }
  }


  //save Emetteur
  saveEmetteur() {
    console.log(this.emetteur);

    this._emetteurService.saveEmetteur(this.emetteur).subscribe(
       data => {
         console.log("response", data);
         this._router.navigateByUrl("/emetteurs");
       }
     )

     //save Recepteur
     console.log(this.recepteur);
     this._recepteurService.saveRecepteur(this.recepteur).subscribe(
       data => {
         console.log("response", data);
         this._router.navigateByUrl("/recepteurs")
       }
     )

    //save envoie
    console.log(this.detail);
    this._detailService.saveDetailEnvoie(this.detail).subscribe(
       data => {
         console.log("response", data);
         this._router.navigateByUrl("/details")
       }
    )
  }
}
