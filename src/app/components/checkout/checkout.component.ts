import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  cartList 
  total
  constructor( private shoppingCartService: ShoppingCartService,

    ) {
      this.cartList = this.shoppingCartService.cartItems;
      this.total = this.cartList.reduce(function (a, b) { return a + b.price; }, 0)}

  ngOnInit(): void {
  }

}
