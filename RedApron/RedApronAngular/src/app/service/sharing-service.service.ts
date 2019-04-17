import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharingServiceService {
  private data

  constructor() { }

  getData(){
    // let temp= this.data;
    return JSON.parse(sessionStorage.data);
  }
  
  setData(data){
    this.data = data;
    sessionStorage.data = JSON.stringify(this.data)
    console.log("SETTING DATA : " + data)
  }

}
