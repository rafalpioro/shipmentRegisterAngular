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
  static readonly USER_STORAGE_KEY = 'CurrentUser';
  static readonly ROLE_STORAGE_KEY = 'Role';
  static readonly ID_STORAGE_KEY = 'Id';


  redirectToUrl: string = '/';


  constructor(private router: Router, private tokenService: TokenizerService) { }

  public login(credentials: Credentials): void {
    this.tokenService.getResponseHeaders(credentials)
      .subscribe((res: HttpResponse<any>) => {



        this.saveToken(res.headers.get('Authorization'));
        let decodedAccessToken = this.getDecodedAccessToken(this.getToken());
        localStorage.setItem(AuthenticationService.USER_STORAGE_KEY, decodedAccessToken.sub);
        localStorage.setItem(AuthenticationService.ROLE_STORAGE_KEY, decodedAccessToken.role);
        localStorage.setItem(AuthenticationService.ID_STORAGE_KEY, decodedAccessToken.id);


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

  public getRole(): string {

    return localStorage.getItem(AuthenticationService.ROLE_STORAGE_KEY);
  }

  public getCurrentUser(): string {
    return localStorage.getItem(AuthenticationService.USER_STORAGE_KEY);
  }


  public logout(): void {

    localStorage.removeItem(AuthenticationService.TOKEN_STORAGE_KEY);
    localStorage.removeItem(AuthenticationService.USER_STORAGE_KEY);
    localStorage.removeItem(AuthenticationService.ROLE_STORAGE_KEY);
    localStorage.removeItem(AuthenticationService.ID_STORAGE_KEY);


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

}
