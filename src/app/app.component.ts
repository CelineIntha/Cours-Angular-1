import { Component } from '@angular/core';
import { AuthentificationService } from './services/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'dev1';

  constructor(public auth: AuthentificationService, private router: Router) {}

  onDeconnexion() {
    this.auth.deconnexion()
    this.router.navigateByUrl('/connexion');
  }
}