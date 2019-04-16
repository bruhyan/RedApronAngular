import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharingServiceService {
  private data

  constructor() { }

  getData(){
    let temp= this.data;
    return temp;
  }
  setData(data){
    this.data = data;
    console.log("SETTING DATA : " + data)
  }

}
