import { Component, OnInit} from '@angular/core';
import { UserService } from './services/user-service';
declare var window: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
  title = 'HRMS';
  opened = false;
  formModal: any;

  constructor(private userService : UserService) {}

  ngOnInit() : void {
  }  
}