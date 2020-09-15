import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartList: any = [];

  constructor(
    private shoppingCartService: ShoppingCartService,
private route : Router
  ) {
    this.cartList = this.shoppingCartService.cartItems;
  }

  ngOnInit(): void {
  }

  removeItemFromCart(item) {
    this.shoppingCartService.removeItem(item)

  }
  checkout() {
    this.route.navigateByUrl ('/checkout')

  }
}
