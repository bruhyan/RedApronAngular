import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharingServiceService {
  private data;
  private messageSource = new BehaviorSubject<string>("default");
  currentMessage = this.messageSource.asObservable();


  
  constructor() { }

  getData(){
    // let temp= this.data;
    console.log("RETURNING DATA FROM SESSIOM TO SHARING : " + sessionStorage.data )
    return JSON.parse(sessionStorage.data);
  }
  
  setData(data){
    this.data = data;
    sessionStorage.data = JSON.stringify(this.data)
    console.log("SETTING DATA : " + data)
  }

  changeMessage(message : string) {
    this.messageSource.next(message)
  }

  getRecipeData(){
    // let temp= this.data;
    console.log("RETURNING DATA FROM SESSIOM TO SHARING : " + sessionStorage.recipe )
    return JSON.parse(sessionStorage.recipe);
  }
  
  setRecipeData(data){
    this.data = data;
    sessionStorage.recipe = JSON.stringify(this.data)
    console.log("SETTING DATA : " + data)
  }


}
