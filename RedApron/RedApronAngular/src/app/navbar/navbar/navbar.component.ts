import { Component, OnInit } from '@angular/core';
import {SessionService} from '../../service/session.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SubscriptionPlan } from '../../models/SubscriptionPlan';
import { jsonpCallbackContext } from '@angular/common/http/src/module';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  cart : SubscriptionPlan[] = [];

  constructor(public sessionService : SessionService, private router : Router, private toastr : ToastrService) { }

  ngOnInit() {
    this.cart = JSON.parse(sessionStorage.cart);
    console.log(this.cart);
    // use loop to calculate price once the async problem is solved
    // for (var i = 0; i < this.cart.length; i++) {
    //   var plan = this.cart[i];
    //   console.log(plan.)
    // }
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
    this.showSuccess();
    this.router.navigate(["/home"]);
  }

  showSuccess() {
    this.toastr.success("Come back soon!", "Logout Successful");
  }

  clearSuccess() {
    this.toastr.success("Cart Cleared");
  }

}
