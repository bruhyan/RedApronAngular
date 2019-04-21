import { Injectable } from '@angular/core';
import { User } from '../user';
import { SubscriptionPlan } from '../models/SubscriptionPlan';
import {Subject} from 'rxjs';
import {tap} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  plans : SubscriptionPlan[];

  constructor() {
    
   }

   private _refreshNeeded = new Subject<void>()

   get refreshNeeded() {
    return this._refreshNeeded
  }

   initCart() : void {
    this.plans = [];
    sessionStorage.cart = JSON.stringify(this.plans);
   }

  addPlanToCart(plan: SubscriptionPlan): void {
    let cart = JSON.parse(sessionStorage.cart);
    cart.push(plan);
    sessionStorage.cart = JSON.stringify(cart);
    console.log("refresh here?")
      console.log("refresh here????????")
      this._refreshNeeded.next()
  }

  clearCart():void {
    this.plans = [];
    sessionStorage.cart = JSON.stringify(this.plans);
  }



  getIsChanged(): boolean{
      if(sessionStorage.isChanged == "true"){
        return true;
      }else{
        return false;
      }
  }

  setIsChanged(isChanged: boolean): void{
    sessionStorage.isChanged = isChanged;
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
