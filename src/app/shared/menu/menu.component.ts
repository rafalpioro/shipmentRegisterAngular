import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AuthenticationService} from "../../service/security/authentication.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {

  title: string = "TeacherApp";
  navbarOpen = false;
  isAuth: boolean;

  constructor(private authService: AuthenticationService) { }

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
