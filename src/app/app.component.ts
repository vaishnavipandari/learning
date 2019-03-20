import { Component } from '@angular/core';
import { DataService } from './service/data.service';
import { User } from './models/user.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  data$: Observable<Array<User>>;

  constructor(private service: DataService) {
  }
  getData(): void {
    this.data$ = this.service.getData();
  }
}
