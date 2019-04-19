import { Component, OnInit } from '@angular/core';
import { SubscriptionPlan } from '../models/SubscriptionPlan';
import {SessionService} from '../service/session.service';
import { StripeScriptTag } from "stripe-angular"
import { PaymentComponent } from '../cart/checkout/payment/payment.component';
import { MatDialog, MatDialogRef } from '@angular/material';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart : SubscriptionPlan[] = [];
  size : number;
  totalPrice : number = 0.00;
  canCheckout = false

  constructor(
    private sessionService : SessionService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.cart = JSON.parse(sessionStorage.cart);
    console.log(this.cart);
    this.size = this.cart.length;
    var planPrices = [];
    for (var i = 0; i < this.cart.length; i++) {
      var plan = this.cart[i];
      console.log(plan.category.price);
      console.log(plan.numOfRecipes*2.50);
      planPrices.push(plan.category.price * plan.numOfWeeks + plan.numOfRecipes*2.5);
      this.totalPrice += (plan.category.price * plan.numOfWeeks);
      this.totalPrice += (plan.numOfRecipes*2.50);
    }
    if(this.cart.length > 0) {
      this.canCheckout = true
    }
    sessionStorage.setItem("totalPrice", (this.totalPrice.toString()));
    sessionStorage.setItem("planPrices", JSON.stringify(planPrices));
  }
  
  openDialog(): void {
    this.dialog.open(PaymentComponent, { width: '35%', height: '50%' });

  }

}
