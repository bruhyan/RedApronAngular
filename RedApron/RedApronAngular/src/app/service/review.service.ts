import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Review } from '../models/Review';

const httpOptions = {
  header: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class ReviewService {

  baseUrl = '/api/Review';

  constructor(private httpClient: HttpClient) { }

  createReview(review : Review){
    
    let createReviewReq = {
      "review": review
    };

    return this.httpClient.put<Review>(this.baseUrl, createReviewReq).pipe(
      catchError(this.handleError)
    );
  }

  retrieveReviewsByRecipeId(id: string): Observable<any>{
    return this.httpClient.get<any>(this.baseUrl + "/retrieveReviewsByRecipeId/"+ id).pipe
      (
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage: String = "";

    if (error.error instanceof ErrorEvent) {
      errorMessage = "An unknown error has occurred: " + error.error.message;
    }
    else {
      errorMessage = "A HTTP error has occurred: " + `HTTP ${error.status}: ${error.error.message}`;
    }

    console.error(errorMessage);

    return throwError(errorMessage);
  }
}
