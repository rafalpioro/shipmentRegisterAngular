import { Injectable } from '@angular/core';

import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import {Credentials} from "./credentials";
import {TokenizerService} from "../tokenizer-service";
import * as jwt_decode from "jwt-decode";


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  static readonly TOKEN_STORAGE_KEY = 'Token';

  redirectToUrl: string = '/';


  constructor(private router: Router, private tokenService: TokenizerService) { }

  public login(credentials: Credentials): void {
    this.tokenService.getResponseHeaders(credentials)
      .subscribe((res: HttpResponse<any>) => {

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


  public getEmailFromToken(): string {
    let decodedAccessToken = this.getDecodedAccessToken(this.getToken());
    return decodedAccessToken.sub;
  }

  public getIdFromToken(): string {
    let decodedAccessToken = this.getDecodedAccessToken(this.getToken());
    return decodedAccessToken.id;
  }

  public getRoleFromToken(): string {
    let decodedAccessToken = this.getDecodedAccessToken(this.getToken());
    return decodedAccessToken.role;
  }

  public getTimeToLogOut(): number {

      let decodedAccessToken = this.getDecodedAccessToken(this.getToken());
      let now = Date.now();
      let expire = new Date();
      expire.setMilliseconds(decodedAccessToken.exp);
      console.log("time left " + Math.round(decodedAccessToken.exp - (now/1000)));
      return  Math.round(decodedAccessToken.exp - (now/1000));
  }


  public logout(): void {

    localStorage.removeItem(AuthenticationService.TOKEN_STORAGE_KEY);

    this.router.navigate(['/']);
  }

  public isLoggedIn(): boolean {

    return !!this.getToken();
  }


  public getDecodedAccessToken(token: string): any {
    try{
      return jwt_decode(token);
    }
    catch(Error){
      return null;
    }
  }

  startTimer( timeLeft): number {
    return setInterval(() => {
      if(timeLeft > 0) {
        timeLeft--;
      } else {
        0;
      }
    },1000)
  }

}
