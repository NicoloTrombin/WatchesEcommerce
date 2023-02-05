import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../model/product';
import { ProductsService } from '../service/products.service';
import { ShoppingCartService } from '../service/shopping-cart.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit{

  product?: Product;

  constructor(private productsService: ProductsService, private activatedRoute: ActivatedRoute, private shoppingCartService: ShoppingCartService) {}
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = +params['id'];

      this.product = this.productsService.getProductById(id);
    });
  }

  onAddCart(prod: Product) {
    this.shoppingCartService.add(prod, 1);
  }
}
