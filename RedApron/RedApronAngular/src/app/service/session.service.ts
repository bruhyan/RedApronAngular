import { Injectable } from '@angular/core';
import { User } from '../user';
import { SubscriptionPlan } from '../models/SubscriptionPlan';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  plans : SubscriptionPlan[];

  constructor() {
    
   }

   initCart() : void {
    this.plans = [];
    sessionStorage.cart = JSON.stringify(this.plans);
   }

  addPlanToCart(plan: SubscriptionPlan): void {
    let cart = JSON.parse(sessionStorage.cart);
    cart.push(plan);
    sessionStorage.cart = JSON.stringify(cart);
  }

  clearCart():void {
    this.plans = [];
    sessionStorage.cart = JSON.stringify(this.plans);
  }

  getIsLogin(): boolean {
    if(sessionStorage.isLogin == "true") {
      return true;
    }else {
      return false;
    }
  }

  setIsLogin(isLogin:boolean): void {
    sessionStorage.isLogin = isLogin;
  }

  getCurrentUser(): User {
    return JSON.parse(sessionStorage.currentUser);
  }

  setCurrentUser(currentUser : User): void {
    sessionStorage.currentUser = JSON.stringify(currentUser);
  }

  getUserEmail(): string {
    return sessionStorage.email;
  }

  setUserEmail(email:string): void {
    sessionStorage.email = email; 
  }

  getPassword(): string
	{
		return sessionStorage.password;
	}



	setPassword(password: string): void
	{
		sessionStorage.password = password;
	}

  
}
