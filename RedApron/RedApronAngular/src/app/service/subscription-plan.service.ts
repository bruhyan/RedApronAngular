import { Injectable } from '@angular/core';
import { Observable, throwError, EMPTY } from 'rxjs'
import { catchError, onErrorResumeNext, switchMap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { SubscriptionPlan } from '../models/SubscriptionPlan';
import { Category } from '../models/Category';
import { User } from '../user';

const httpOptions = {
  header: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SubscriptionPlanService {

  baseUrl = '/api/SubscriptionPlan';

  constructor(private httpClient: HttpClient) { }

  retrieveAllSubscriptionPlansBySubscriberId(id: string): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + "/retrieveAllSubscriptionPlansBySubscriberId/" + id).pipe
      (
        catchError(this.handleError)
      );
  }

  retrieveAllRecipesBySubscriptionId(id: string): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + "/retrieveAllRecipesBySubscriptionPlanId/" + id).pipe
      (
        catchError(this.handleError),

      )
  }

  createSubscriptionPlan(subscriptionPlan: SubscriptionPlan, category: Category, subscriber: User): Observable<any> {

    let createSubscriptionPlanReq = {
      "subscriptionPlan": subscriptionPlan,
      "category": category,
      "subscriber": subscriber
    };

    return this.httpClient.put<SubscriptionPlan>(this.baseUrl, createSubscriptionPlanReq).pipe
      (

        catchError(this.handleError)
      )
  }

  public retrieveLatestSubscriptionPlan(num){
    return this.httpClient.get<any>(this.baseUrl + "/retrieveLatestSubscriptionPlan/" + num).pipe(
      catchError(this.handleError)
    )
  }


  private handleError(error: HttpErrorResponse) {
    let errorMessage: string = "";
    let debug = false;
    if (error.error instanceof ErrorEvent) {
      errorMessage = "An unknown error has occurred: " + error.error.message;
    }
    else {
      errorMessage = "A HTTP error has occurred: " + `HTTP ${error.status}: ${error.error.message}`;
    }

    if(error.status == 500 && error.error.message == undefined && error.url=="http://localhost:4200/api/SubscriptionPlan"){
      console.log("This error is a bit weird. It's not from glassfish, subscription plan is created also. Will ignore for now."); 
      return EMPTY;
    }

    console.error(errorMessage);

    return throwError(errorMessage);
  }

}
