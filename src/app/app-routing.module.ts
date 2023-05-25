import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { PanierComponent } from './pages/panier/panier.component';
import { Page404Component } from './pages/page404/page404.component';
import { EditProduitComponent } from './pages/edit-produit/edit-produit.component';
import { ListeUtilisateurComponent } from './pages/liste-utilisateur/liste-utilisateur.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';

const routes: Routes = [
  {path: "accueil", component: AccueilComponent},
  {path: "panier", component: PanierComponent},
  {path: 'edit-produit/:id', component: EditProduitComponent},
  {path: 'edit-produit', component: EditProduitComponent},
  {path: 'liste-utilisateur', component: ListeUtilisateurComponent},
  {path: 'connexion', component: ConnexionComponent},
  {path: "", redirectTo: 'accueil', pathMatch: 'full'},
  {path: "**", component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
