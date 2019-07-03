import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {AuthenticationService} from "../../service/security/authentication.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {

  title: string = "ShipmentRegister";
  navbarOpen = false;
  isAuth: boolean;
  role: string;
  isAdmin: boolean;


  constructor(private authService: AuthenticationService) {

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

  checkAdmin() {
    if(this.isAuth == true) {

      return this.isAdmin = (this.role === "ROLE_ADMIN");
    }
  }

}
