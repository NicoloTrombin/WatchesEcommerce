import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from 'rxjs/operators'
import { Product } from "../model/product";
import { ShoppingCartItem } from "../model/shopping-cart-item";

@Injectable ({providedIn: 'root'})
export class ShoppingCartService {

  private cart: ShoppingCartItem[] = [];
  private cartSubject = new BehaviorSubject(this.cart);

  readonly cart$: Observable<ShoppingCartItem[]> =
    this.cartSubject.asObservable();

  readonly itemCount$ = this.cart$.pipe(map((cart) => cart.length));
  readonly cartTotal$ = this.cart$.pipe(
    map((cart) => {
      let somma = 0;

      for (const item of cart) {
        somma += item.prodotto.prezzo * item.qty;
      }

      return somma;
    })
  );

  add(item: Product, qty: number) {
    // Controllo se esiste già un item con lo stesso prodotto, in quel caso non pusho ma modifico la quantità

    const indexOfExistingItem = this.cart.findIndex(
      (i) => i.prodotto.id === item.id
    );

    if (indexOfExistingItem === -1) {
      this.cart.push({
        prodotto: item,
        qty,
      }); 
    } else {
      this.cart[indexOfExistingItem].qty += qty;
    }

    // Notifico tutti della modifica del carrello
    this.cartSubject.next(this.cart);
  }

  removeItem(item: ShoppingCartItem, qty: number) {
    const indexOfExistingItem = this.cart.findIndex(i => i.prodotto.id === item.prodotto.id);

    if(item.qty > 1) {
      this.cart[indexOfExistingItem].qty -= qty;
    } 
    else {
      this.cart = this.cart.filter(c => c.prodotto.id != item.prodotto.id);
    }

    this.cartSubject.next(this.cart);
  }

  updateQuantity() {
    this.cartSubject.next(this.cart);
  }


}
