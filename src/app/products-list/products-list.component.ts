import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../model/product';
import { User } from '../model/user';
import { AuthService } from '../service/auth.service';
import { ProductsService } from '../service/products.service';
import { ShoppingCartService } from '../service/shopping-cart.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit{
  
    products!: Product[];

    loggedUser$ !: Observable<User | null>;
    isLogged$ !: Observable<boolean>;
    isNotLogged$ !: Observable <boolean>;

    constructor(private productsService: ProductsService, private authService: AuthService, private shoppingCartService: ShoppingCartService) {}
  
    ngOnInit(): void {
     this.products = this.productsService.getProducts();

     this.loggedUser$ = this.authService.loggedUser$;
     this.isLogged$ = this.authService.isLogged$;
     this.isNotLogged$ = this.isLogged$.pipe(map(logged => !logged));
    }

    onLogout() {
      this.authService.logout();
    }

    onAddCart(prod: Product) {
      this.shoppingCartService.add(prod, 1);
    }
}


