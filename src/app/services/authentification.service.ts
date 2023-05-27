import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthentificationService {
  
  utilisateur: any = null;

  constructor() {
    const jwt = localStorage.getItem("jwt");

    if(jwt != null) {
      this.connexion(jwt); 
    }
  }

  deconnexion() {
    localStorage.removeItem('jwt');
    this.utilisateur = null;
  }

  connexion(jwt : string) {
    localStorage.setItem('jwt',jwt);

    const partiesJwt = jwt.split('.');
    const payloadBase64 = partiesJwt[1];
    const jsonUtilisateur = window.atob(payloadBase64);
    this.utilisateur = JSON.parse(jsonUtilisateur);
  }
}