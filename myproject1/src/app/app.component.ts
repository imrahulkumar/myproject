import { DataService } from './services/data.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';
  user: string[];
constructor(public dataService: DataService) {

  this.user = dataService.getUsers();
}

}
