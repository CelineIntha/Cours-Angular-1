import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { PanierComponent } from './pages/panier/panier.component';
import { Page404Component } from './pages/page404/page404.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { EditProduitComponent } from './pages/edit-produit/edit-produit.component';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListeUtilisateurComponent } from './pages/liste-utilisateur/liste-utilisateur.component';
import { HttpClientModule } from '@angular/common/http';
import { MajusculePipe } from './pipes/majuscule.pipe';
import { ConnexionComponent } from './pages/connexion/connexion.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    PanierComponent,
    Page404Component,
    EditProduitComponent,
    ListeUtilisateurComponent,
    MajusculePipe,
    ConnexionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
