import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-produit',
  templateUrl: './edit-produit.component.html',
  styleUrls: ['./edit-produit.component.scss'],
})
export class EditProduitComponent {
  idArticle = null;
  listeCategorie: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.http
      .get('http://localhost:8888/Angular/BackEndAngular/liste-categories.php')
      .subscribe(
        (listeCategorie: any) => (this.listeCategorie = listeCategorie)
      );

    this.route.params.subscribe((parametres) => {
      this.idArticle = parametres['id'];

      if (parametres['id']) {
        this.http
          .get(
            'http://localhost:8888/Angular/BackEndAngular/article.php?id=' +
              parametres['id']
          )
          .subscribe((article) => this.formulaire.patchValue(article));
      }
    });
  }

  formulaire: FormGroup = this.formBuilder.group({
    nom: ['', [Validators.required]],
    contenu: ['', [Validators.required, Validators.minLength(10)]],
    id_categorie: [null, []],
  });

  onSubmit() {
    if (this.formulaire.valid) {
      const jwt = localStorage.getItem('jwt');
      const article = this.formulaire.value;
      article.id = this.idArticle;

      if (jwt != null) {
        this.http
          .post(
            'http://localhost:8888/Angular/BackEndAngular/' +
              (this.idArticle == null ? 'ajout-article' : 'modifier-article') +
              '.php',
            article,
            { headers: { Authorization: jwt } }
          )
          .subscribe((reponse) => this.router.navigateByUrl('/accueil'));
      }
    }
  }
}