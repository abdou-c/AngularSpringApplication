import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recepteur } from '../entities/recepteur';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RecepteurService {
  //link Angular Spring
  private getUrl: string = "http://localhost:8088/ListeRecepteur";
  private getUrlPost = 'http://localhost:8088/Recepteur/Add';
  constructor(private _httpClient: HttpClient) { }

  //la liste des recepteurs
  getRecepteurs(): Observable<Recepteur[]> {
    return this._httpClient.get<Recepteur[]>(this.getUrl).pipe(
      map(response => response)
    );
  }

  //save Recepteur
  saveRecepteur(recepteur:Recepteur): Observable<Recepteur> {
      return this._httpClient.post<Recepteur>(this.getUrlPost,
      {
        nom: recepteur.nom,
        prenom: recepteur.prenom,
        telephone: recepteur.telephone,
        cni: recepteur.cni
    });
  }
}
