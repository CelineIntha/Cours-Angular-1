import { HttpClient } from '@angular/common/http'
import { Component } from '@angular/core';

@Component({
  selector: 'app-liste-utilisateur',
  templateUrl: './liste-utilisateur.component.html',
  styleUrls: ['./liste-utilisateur.component.scss']
})
export class ListeUtilisateurComponent {

  listeUtilisateur: any = []

  maintenant: Date = new Date();

  constructor(private http: HttpClient) {

    // this.http
    // .get('http://localhost:84/liste-utilisateur.php')
    // .subscribe(data => this.listeUtilisateur = data)

    this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe(data => this.listeUtilisateur = data)
  }

  enMajuscule(texte : string) {
    console.log("appelée !")
    return texte.toUpperCase()
  }

  traitement() {

  }

}


