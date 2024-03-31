import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnDestroy{
  showNavbar: boolean = true;
  subsciption: Subscription;

  constructor(private navbarService: NavbarService){
    this.subsciption = this.navbarService.showNavbar.subscribe((value) => {
      this.showNavbar = value;
    });
  }

  ngOnDestroy(): void {
    this.subsciption.unsubscribe();
  }
}
