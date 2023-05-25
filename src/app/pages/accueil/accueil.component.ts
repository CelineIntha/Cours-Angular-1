import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
})
export class AccueilComponent {
  isAdmin = true;

  listeArticle: any[] = [];

  constructor(private http: HttpClient) {
    this.raffraichir();
  }

  raffraichir() {
    this.http
      .get('http://localhost:8888/Angular/BackEndAngular/liste-articles.php')
      .subscribe((resultat: any) => (this.listeArticle = resultat));
  }

  onSuppressionArticle(id: number) {
    const jwt = localStorage.getItem('jwt');

    if (jwt != null) {
      this.http
        .delete(
          'http://localhost:8888/Angular/BackEndAngular/suppression-article.php?id=' +
            id,
          { headers: { Authorization: jwt } }
        )
        .subscribe((reponse) => this.raffraichir());
    }
  }

  // listeArticle = [{nom : "Coffee", prix:12, promotion:8, urlImage: "https://www.tastingtable.com/img/gallery/coffee-brands-ranked-from-worst-to-best/intro-1645231221.webp", description:"Le café est une boisson énergisante psychotrope stimulante, obtenue à partir des graines torréfiées de diverses variétés de caféier, de l'arbuste caféier, du genre Coffea."},
  // {nom : "Moca", prix:7, promotion:0, urlImage:'https://images.ctfassets.net/v601h1fyjgba/4mf4LfyiIKLvOw72oPDgD3/cca493e3a33d080f4a7e6eade04af27a/Caf___Mocha.jpg', description:"Boisson chaude italienne composée de cappuccino, de crème et de chocolat, le tout mélangé avec de la poudre de cacao."},
  // {nom : "Expresso", prix:10, promotion: 0, urlImage: 'https://res.cloudinary.com/hv9ssmzrz/image/fetch/c_fill,f_auto,h_387,q_auto,w_650/https://s3-eu-west-1.amazonaws.com/images-ca-1-0-1-eu/tag_photos/original/1736/expresso-pixabay-coffee-3107235_1280.jpg', description:"Espresso is both a coffee beverage and a brewing method. It is not a specific bean, bean blend, or roast level. Any bean or roasting level can be used to produce authentic espresso. For example, in southern Italy, a darker roast is generally preferred."},
  // {nom : "Latte", prix:6, promotion:4, urlImage: 'https://www.nespresso.com/ncp/res/uploads/recipes/nespresso-recipes-Latte-Macchiato.jpg', description:"Un latte, ou café latte (de l'italien caffè latte (ou caffelatte, approx. café au lait) est une boisson chaude faite avec du café espresso et du lait chauffé à la vapeur."}];
}
