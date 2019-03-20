import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  tdate:Date;
  serviceproperty:String="service created";
  showTodayDate()
  {
    this.tdate=new Date();
    return this.tdate;
  }


  constructor() 
  { 

  }
}
