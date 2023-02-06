import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../model/product';
import { ShoppingCartItem } from '../model/shopping-cart-item';
import { User } from '../model/user';
import { AuthService } from '../service/auth.service';
import { ShoppingCartService } from '../service/shopping-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // Login
    loggedUser$ !: Observable<User | null>;
    isLogged$ !: Observable<boolean>;
    isNotLogged$ !: Observable <boolean>;

  // Cart
  cart$!: Observable<ShoppingCartItem[]>;

  cartTotal$!: Observable<number>;

  itemCount$ !: Observable<number>;

    constructor(private authService: AuthService, private shoppingCartService: ShoppingCartService) {}
  
    ngOnInit(): void {
     this.loggedUser$ = this.authService.loggedUser$;
     this.isLogged$ = this.authService.isLogged$;
     this.isNotLogged$ = this.isLogged$.pipe(map(logged => !logged));

     this.cart$ = this.shoppingCartService.cart$;
     this.cartTotal$ = this.shoppingCartService.cartTotal$;
     this.itemCount$ = this.shoppingCartService.itemCount$;
    }
    
    onLogout() {
      this.authService.logout();
    }
    
    displayCart: boolean = false;
    
    onClickDisplay() {
      return this.displayCart = !this.displayCart; 
    }
    
    onClickRemoveItem(item: ShoppingCartItem) {
      this.shoppingCartService.removeItem(item, 1);
    }

    logQuantity(qty: number) {
      console.log(qty);
    }

    updateQ() {
      this.shoppingCartService.updateQuantity();

      this.update = false;
    }

    update: boolean = false;
    
    showUpdate() {
      this.update = true;
    }

}
