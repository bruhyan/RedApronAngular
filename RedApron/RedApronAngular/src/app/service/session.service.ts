import { Injectable } from '@angular/core';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

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
