import { Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../service/security/authentication.service";


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit{

  title: string = "ShipmentRegister";
  navbarOpen = false;
  isAuth: boolean;
  role: string;
  isAdmin: boolean;
  data;

  color = 'primary';
  mode = 'determinate';
  value = 0;


  constructor(public authService: AuthenticationService) {

  }

  ngOnInit() {
    this.isAuth = this.authService.isLoggedIn();

  }


  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  onLogout() {
    this.authService.logout();
  }


}
