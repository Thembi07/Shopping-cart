import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { element } from 'protractor';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  cartList: any = []
  total
  products = [
    { key: 0, name: 'Mac foundation ', price: 550 },
    { key: 1, name: 'Mac lipstick', price: 250 },
    { key: 2, name: 'Lipliner', price: 50 },
    { key: 3, name: 'Eyelashes', price: 100 },
  ]


  constructor(
    private shoppingCartService: ShoppingCartService,

  ) {
    this.cartList = this.shoppingCartService.cartItems;
    this.total = this.cartList.reduce(function (a, b) { return a + b.price; }, 0)
  }

  ngOnInit(): void {

  }

  addItemToCart(item) {
    this.shoppingCartService.addItem(item)
    this.total = this.cartList.reduce(function (a, b) { return a + b.price; }, 0)
  }

  removeItemFromCart(item) {
    this.shoppingCartService.removeItem(item)
    this.total = this.cartList.reduce(function (a, b) { return a + b.price; }, 0)
  }
}
