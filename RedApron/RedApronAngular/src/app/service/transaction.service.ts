import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Transaction } from '../models/Transaction';


@Injectable({
  providedIn: 'root'
})

export class TransactionService {

  baseUrl = '/api/Transaction';


  constructor(private httpClient: HttpClient) { }


  createTransaction(transaction: Transaction) {

    let createTransactionReq = {
      "transaction": transaction
    };

    return this.httpClient.put<Transaction>(this.baseUrl, createTransactionReq).pipe(
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
