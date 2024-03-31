import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy{
  constructor(private navbarService: NavbarService){

  }
  ngOnDestroy(): void {
    this.navbarService.display();
  }
  ngOnInit(): void {
    this.navbarService.hide();
  }
}
