import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent {
  constructor(private formBuilder: FormBuilder, 
    public auth: AuthentificationService, 
    private router: Router,
    private http: HttpClient) {

   } // Injection de dépendance

  formulaire: FormGroup = this.formBuilder.group({
    email : ["",[Validators.required, Validators.email]],
    password: ["",[Validators.required]] // Contrainte de validation sur le formulaire
  })

  onConnexion() {
    if(this.formulaire.valid){

      //faire une requête pour vérifier si l'utilisateur existe
      this.http.post('http://localhost:8888/Angular/BackEndAngular/connexion.php', this.formulaire.value,)
      .subscribe((reponse: any) => {
        if(reponse.jwt) {
          this.auth.connexion(reponse.jwt)
        }
      });

      this.router.navigateByUrl('/accueil')
    }
  }
}
