import { Component, OnInit } from '@angular/core';
import { Recepteur } from '../entities/recepteur';
import { RecepteurService } from '../services/recepteur.service';

@Component({
  selector: 'app-list-recepteur',
  templateUrl: './list-recepteur.component.html',
  styleUrls: ['./list-recepteur.component.css']
})
export class ListRecepteurComponent implements OnInit {

  recepteurs: Recepteur[] = [];
  constructor(private recepteurService: RecepteurService) { }

  ngOnInit(): void {
    this.recepteurService.getRecepteurs().subscribe(
      data => this.recepteurs = data
    )
  }

}
