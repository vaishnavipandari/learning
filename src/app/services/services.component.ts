import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit 
{
  id:number;
  name:String;
  mark1:number;
  mark2:number;
  mark3:number;
  total:number;
  todaydate: Date;
  avg:number;
  fees:number;
  info={name:'vaisu',age:25,address:'dindigul'};
  constructor() 
  { 

  }

  ngOnInit() 
  {
    this.printStudentDetails(111,'vaisu',56,78,87);
    this.printOthers(new Date(),800);
  }

  printStudentDetails(id:number,name:String,mark1:number,mark2:number,mark3:number)
  {
    this.id=id;
    this.name=name;
    this.mark1=mark1;
    this.mark2=mark2;
    this.mark3=mark3;
    this.total=mark1+mark2+mark3;
    this.avg=this.total/3;
   }
  printOthers(todaydate:Date,fees:number)
  {
    this.todaydate=todaydate;
    this.fees=fees;
  }


}