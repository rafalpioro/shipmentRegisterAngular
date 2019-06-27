import { Injectable } from '@angular/core';


import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import {Credentials} from "./credentials";
import {TokenizerService} from "../tokenizer-service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  static readonly TOKEN_STORAGE_KEY = 'Token';
  redirectToUrl: string = '/shipment';

  constructor(private router: Router, private tokenService: TokenizerService) { }

  public login(credentials: Credentials): void {
    this.tokenService.getResponseHeaders(credentials)
      .subscribe((res: HttpResponse<any>) => {
        console.log(res.headers);
        console.log(res);

        localStorage.setItem('currentUser', credentials.email);
        console.log(localStorage.getItem('currentUser'));
        this.saveToken(res.headers.get('Authorization'));
        this.router.navigate([this.redirectToUrl]);
      });
  }

  private saveToken(token: string){
    if(token != null) {
      localStorage.setItem(AuthenticationService.TOKEN_STORAGE_KEY, token);
    }
  }

  public getToken(): string {
    return localStorage.getItem(AuthenticationService.TOKEN_STORAGE_KEY);
  }

  public logout(): void {
    this.tokenService.logout()
      .subscribe(() =>{
        localStorage.removeItem(AuthenticationService.TOKEN_STORAGE_KEY);
        localStorage.removeItem('currentUser');
      });
  }

  public isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
