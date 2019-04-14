import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';

const httpOptions = {
  header: new HttpHeaders({ 'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = '/api/Recipe';

  constructor(private httpClient : HttpClient) { }

  

  getUser(): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl).pipe(
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
