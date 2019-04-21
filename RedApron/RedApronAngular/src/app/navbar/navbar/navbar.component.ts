import { Component, OnInit, Input } from '@angular/core';
import {SessionService} from '../../service/session.service';
import { SharingServiceService } from '../../service/sharing-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SubscriptionPlan } from '../../models/SubscriptionPlan';
import { jsonpCallbackContext } from '@angular/common/http/src/module';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() message : string;
  cart : SubscriptionPlan[] = [];
  size : number;
  totalPrice : number = 0.00;

  constructor(public sessionService : SessionService, private router : Router, private toastr : ToastrService, private sharingService : SharingServiceService) { }

  ngOnInit() {


    this.sharingService.currentMessage.subscribe(message => this.message = message);
    this.cart = JSON.parse(sessionStorage.cart);
    console.log(this.cart);
    this.size = this.cart.length;
    for (var i = 0; i < this.cart.length; i++) {
      var plan = this.cart[i];
      console.log(plan.category.price);
      console.log(plan.numOfRecipes*2.50);
      this.totalPrice += (plan.category.price * plan.numOfWeeks);
      this.totalPrice += (plan.numOfRecipes*2.50);
    }
  }

  clearCart() {
    this.sessionService.clearCart();
    this.ngOnInit();
    this.clearSuccess();
    this.router.navigate(['/home']);
  }

  userLogout() {
    this.sessionService.setIsLogin(false);
    this.sessionService.setCurrentUser(null);
    this.sessionService.clearCart();
    this.cart = []
    this.size = 0;
    this.totalPrice = 0
    
    this.showSuccess();
    this.router.navigate(["/home"]);
  }

  showSuccess() {
    this.toastr.success("Come back soon!", "Logout Successful");
  }

  clearSuccess() {
    this.toastr.success("Cart Cleared");
  }

  receiveMessage($event) {
    this.message = $event
    this.sharingService.currentMessage.subscribe(message => this.message = message);
    this.cart = JSON.parse(sessionStorage.cart);
    console.log(this.cart);
    this.size = this.cart.length;
    for (var i = 0; i < this.cart.length; i++) {
      var plan = this.cart[i];
      console.log(plan.category.price);
      console.log(plan.numOfRecipes*2.50);
      this.totalPrice += (plan.category.price * plan.numOfWeeks);
      this.totalPrice += (plan.numOfRecipes*2.50);
    }

  }

}
