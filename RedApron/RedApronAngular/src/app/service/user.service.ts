import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';

import {User} from '../user';

const httpOptions = {
  header: new HttpHeaders({ 'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = '/api/Subscriber';

  constructor(private httpClient : HttpClient) { }

  

  userLogin(email: string, password: string): Observable<any> {
		return this.httpClient.get<any>(this.baseUrl+"/subscriberLogin?email="+email+"&password="+password).pipe
		(
			catchError(this.handleError)
		);
	}

	updateUser(userToUpdate : User): Observable<any> {
		let updateSubscriberReq = {
			"subscriber" : userToUpdate
		};
		return this.httpClient.post<any>(this.baseUrl, updateSubscriberReq).pipe(
			catchError(this.handleError)
		);
	}

	createUser(newUser: User): Observable<any> {
		let createSubscriberReq = {
			"subscriber" : newUser
		};
		return this.httpClient.put<any>(this.baseUrl, createSubscriberReq).pipe
		(
			catchError(this.handleError)
		);
	}

  private handleError(error: HttpErrorResponse)
	{
		let errorMessage: string = "";
		
		if (error.error instanceof ErrorEvent) 
		{		
			errorMessage = "An unknown error has occurred: " + error.error.message;
		} 
		else 
		{		
			errorMessage = "A HTTP error has occurred: " + `HTTP ${error.status}: ${error.error.message}`;
		}
		
		console.error(errorMessage);
		
		return throwError(errorMessage);		
  }
  
}
