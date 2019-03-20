import { Component, OnInit } from '@angular/core';
import { Vaishu } from '../services/Vaishu';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  stud=[{id:234,name:'vaisu'},{id:235,name:'meena'},{id:236,name:'nisha'}];
  months=["January","February","March","April","May"];
  isavailable=true;
  a:number=5;
  b:number=10;
  c:number;
  constructor() 
  {
    this.c=this.a+this.b;
  }
  ngOnInit() 
  {
    
  }
  myFunction()
  {
    this.c=this.a*this.b;
    alert("Multiplication is:"+this.c);
  }
}
