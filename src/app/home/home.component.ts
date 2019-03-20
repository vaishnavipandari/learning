import { Component, OnInit } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';
import { MyserviceService } from '../myservice.service';
import { Subtraction } from '../contact/subtraction'
import { summaryFileName } from '@angular/compiler/src/aot/util';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit 
{
  name: String;
  todaydate:Date;
  todaydate1:Date;
  x:number=15;
  y:number=34;
  z:number;
  //result:number;
  // sub: Subtraction;
  componentproperty:String;
  constructor(private serv:MyserviceService) 
  {
    this.todaydate=this.serv.showTodayDate();
    //this.result=this.sub.a;
    this.componentproperty=this.serv.serviceproperty;
    alert(this.componentproperty);
    this.serv.serviceproperty="component created";
  }

  ngOnInit() 
  {
    this.printName('Vaishu..');
    this.doAdd();
    this.componentproperty=this.serv.serviceproperty;
  }

  printName(nme)
  {
    this.name = nme;
    console.log('Welcome ', name);
  }

  doAdd()
  {
    this.z=this.x+this.y;
  }
}
