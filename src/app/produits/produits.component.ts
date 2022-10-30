import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  produits! : Produit[]; //un tableau de Produit

  constructor(private produitService: ProduitService ) {
    //this.produits = produitService.listeProduits();
    }

    ngOnInit(): void {
        this.chargerProduits();
      }
      chargerProduits(){
        this.produitService.listeProduit().subscribe(prods =>{
          console.log(prods);
          this.produits=prods;
        });
      }
      supprimerProduit(p: Produit)
{
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
    this.produitService.supprimerProduit(p.idProduit!).subscribe(() => {
    console.log("produit supprimé");
    this.SuprimerProduitDuTableau(p);
});
}
SuprimerProduitDuTableau(prod : Produit) {
  this.produits.forEach((cur, index) => {
  if(prod.idProduit=== cur.idProduit) {
  this.produits.splice(index, 1);
  }
  });
  }
}
