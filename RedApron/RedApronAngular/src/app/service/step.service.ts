import { Observable, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';import { Injectable } from '@angular/core';

const httpOptions = {
  header: new HttpHeaders({ 'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class StepService {

  baseUrl = '/api/Step'

  constructor(private httpClient:HttpClient) { }

  
  

	getStepsByRecipeId(recipeId: number): Observable<any>
	{		
		return this.httpClient.get<any>(this.baseUrl + "/retrieveStepsByRecipeId/" + recipeId).pipe
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
