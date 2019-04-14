import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

const httpOptions = {
  header: new HttpHeaders({ 'Content-Type': 'application/json'})
}


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  baseUrl = '/api/Recipe'

  constructor(private httpClient:HttpClient) { }

  getRecipes(): Observable<any>
	{		
		return this.httpClient.get<any>(this.baseUrl + "/retrieveAllRecipes").pipe
		(
			catchError(this.handleError)
		);
	}
  
  getRecipeByRecipeId(recipeId: number): Observable<any>
	{
		return this.httpClient.get<any>(this.baseUrl + "/retrieveRecipeById/" + recipeId).pipe
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
