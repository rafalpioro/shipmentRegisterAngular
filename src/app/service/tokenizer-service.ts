import { Injectable } from '@angular/core';
import {HttpBackend, HttpHeaders} from '@angular/common/http';
import {Credentials} from "./security/credentials";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  observe: 'response' as 'body'
};
const URL =environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class TokenizerService {


  constructor(private http: HttpBackend) { }

  public getResponseHeaders(credentials: Credentials) {
    let loginUrl = URL + '/login';
    return new HttpClient(this.http).post<any>(loginUrl, credentials, httpOptions);
  }

}
