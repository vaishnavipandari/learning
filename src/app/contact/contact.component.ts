import { Component, OnInit } from '@angular/core';
import { ServicesComponent} from '../services/services.component';
import { Vaishu } from '../services/Vaishu';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  data: Observable<Array<User>>;
  apiAddress: string;
  vaishu: Vaishu = {role: 'trainee', designation: 'angular'
};
  course = [ 'MCA' , 'M.Sc(IT)', 'B.E', 'B.Sc', 'BBA', 'M.E', 'MBA', 'B.Tech'];
  constructor(private http: HttpClient) {
    this.apiAddress = 'http://jsonplaceholder.typicode.com/users';
  }
   ngOnInit() {
      this.changeCourse('hai');
   }
   changeCourse(event) {
     alert('change course from the dropdown');
     console.log(event);
   }
   getData(): void {
    this.data = this.http.get<Array<User>>(this.apiAddress);
   }
 }
