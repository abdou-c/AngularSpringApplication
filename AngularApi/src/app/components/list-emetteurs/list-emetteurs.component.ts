import { Component, OnInit } from '@angular/core';
import { Emetteur } from 'src/app/entities/emetteur';
import { EmetteurService } from 'src/app/services/emetteur.service';

@Component({
  selector: 'app-list-emetteurs',
  templateUrl: './list-emetteurs.component.html',
  styleUrls: ['./list-emetteurs.component.css']
})
export class ListEmetteursComponent implements OnInit {

  emetteurs: Emetteur[] = [];
  constructor(private _emetteurService: EmetteurService) { }

  ngOnInit(): void {
    this._emetteurService.getEmetteurs().subscribe(
      data => this.emetteurs = data
    )
  }

}
