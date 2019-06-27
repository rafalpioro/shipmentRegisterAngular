import { Component, OnInit } from '@angular/core';
import {Credentials} from "../service/security/credentials";
import {AuthenticationService} from "../service/security/authentication.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials: Credentials = new Credentials('', '');

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
  }

  public login(): void {
    this.authService.login(this.credentials);
  }


}
