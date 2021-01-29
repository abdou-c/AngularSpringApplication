import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Emetteur } from '../entities/emetteur';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmetteurService {

  // Link Angular avec Spring Boot
  private getUrl = 'http://localhost:8088/ListeEmetteur';
  private getUrlPost = 'http://localhost:8088/Emetteur/Add';
  constructor(private _httpClient: HttpClient) { }

  // La liste des emetteurs
  getEmetteurs(): Observable<Emetteur[]>{
      return this._httpClient.get<Emetteur[]>(this.getUrl).pipe(
        map(response => response)
      );
  }

  // save Emetteur
  saveEmetteur(emetteur: Emetteur): Observable<Emetteur> {
    return this._httpClient.post<Emetteur>(this.getUrlPost,
      {
        nom: emetteur.nom,
        prenom: emetteur.prenom,
        telephone: emetteur.telephone,
        cni: emetteur.cni
    });
  }

  // getEmetteur(id: number): Observable<Emetteur> {
  //   return this._httpClient.get<Emetteur>(`${this.getUrl}/${id}`).pipe(
  //     map(response => response)
  //   )
  // }
}
