import {Component, OnInit} from '@angular/core';
import {Credentials} from "../service/security/credentials";
import {AuthenticationService} from "../service/security/authentication.service";
import {NgForm} from "@angular/forms";




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  credentials: Credentials = new Credentials('', '');
  errorMessage = "Username or password is incorrect";


  constructor(private authService: AuthenticationService ) { }

  ngOnInit() {

  }

  public login(form: NgForm): void {
    this.credentials.email=form.value.email;
    this.credentials.password=form.value.password;
    this.authService.login(this.credentials);
  }




}
