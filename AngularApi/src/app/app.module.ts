import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEmetteursComponent } from './components/list-emetteurs/list-emetteurs.component';
import { AddEmetteurComponent } from './components/add-emetteur/add-emetteur.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { ListRecepteurComponent } from './list-recepteur/list-recepteur.component';
import {transferDetailComponent} from './transfer-detail/transfer-detail.component';

const routes: Routes = [
  {path: 'emetteurs', component: ListEmetteursComponent},
  {path: 'addemetteur', component: AddEmetteurComponent},
  {path: 'recepteurs', component: ListRecepteurComponent},
  {path: 'details', component: transferDetailComponent},
  {path: '', redirectTo: '/emetteurs', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    ListEmetteursComponent,
    AddEmetteurComponent,
    ListRecepteurComponent,
    transferDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
