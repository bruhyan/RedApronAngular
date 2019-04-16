import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Enquiry } from '../models/Enquiry';

const httpOptions = {
  header: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class EnquiryService {

  baseUrl = '/api/Enquiry';

  constructor(private httpClient: HttpClient) { }



  retrieveEnquiries(id: string): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + "/retrieveEnquiryBySubscriber/"+ id).pipe
      (
        catchError(this.handleError)
      );
  }

  createEnquiry(enquiry : Enquiry){

    let createEquiryReq = {
      "enquiry": enquiry
    };

    return this.httpClient.put<Enquiry>(this.baseUrl, createEquiryReq).pipe(
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
