import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class SharingServiceService {
  private data;
  private messageSource = new BehaviorSubject<string>("default");
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  getData(){
    let temp= this.data;
    return temp;
  }
  setData(data){
    this.data = data;
    console.log("SETTING DATA : " + data)
  }

  changeMessage(message : string) {
    this.messageSource.next(message)
  }



}
