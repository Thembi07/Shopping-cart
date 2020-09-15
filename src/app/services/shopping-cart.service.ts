import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {


  cartItems: any = [];

  constructor() {
  }

  addItem(item) {
    return this.cartItems.push(item)
  }

  removeItem(item) {
    const index: number = this.cartItems.indexOf(item);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
  }
}
