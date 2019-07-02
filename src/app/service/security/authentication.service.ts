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
  static readonly USER_STORAGE_KEY = 'CurrentUser';
  redirectToUrl: string = '/shipment';


  constructor(private router: Router, private tokenService: TokenizerService) { }

  public login(credentials: Credentials): void {
    this.tokenService.getResponseHeaders(credentials)
      .subscribe((res: HttpResponse<any>) => {

        localStorage.setItem(AuthenticationService.USER_STORAGE_KEY, credentials.email);

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

  public getCurrentUser(): string {
    return localStorage.getItem(AuthenticationService.USER_STORAGE_KEY);
  }


  public logout(): void {

    localStorage.removeItem(AuthenticationService.TOKEN_STORAGE_KEY);
    localStorage.removeItem(AuthenticationService.USER_STORAGE_KEY);
    this.router.navigate(['/']);
  }

  public isLoggedIn(): boolean {
    return !!this.getToken();
  }

}
