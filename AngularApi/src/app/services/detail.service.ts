import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Detail} from '../entities/detail';


@Injectable({
  providedIn: 'root'
})
export class DetailService {

  //Link angular Spring
  private getUrl = 'http://localhost:8088/DetailEnvoie';
  private getUrlPost = 'http://localhost:8088/Envoie/Add';

  constructor(private _httpClient: HttpClient) { }

  //la liste des details d'envoie
getDetailEnvoie(): Observable<Detail[]>{
    return this._httpClient.get<Detail[]>(this.getUrl).pipe(
      map(response => response)
    );
  }

  //save Detail Envoie
  saveDetailEnvoie(detail: Detail): Observable<Detail>{
    return  this._httpClient.post<Detail>(this.getUrlPost,
      {
       "montant": detail.montant,
       "dateEnvoie": detail.dateEnvoie,
        "emetteur" : {
           "id" : 1
        },
        "recepteur" : {
          "id" : 1
        }
      });

  }

}
