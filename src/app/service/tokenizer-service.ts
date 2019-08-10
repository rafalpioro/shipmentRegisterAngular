import { Injectable } from '@angular/core';
import {HttpBackend, HttpHeaders} from '@angular/common/http';
import {Credentials} from "./security/credentials";
import {HttpClient} from "@angular/common/http";



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  observe: 'response' as 'body'
};
const API_URL = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class TokenizerService {


  constructor(private http: HttpBackend) { }

  public getResponseHeaders(credentials: Credentials) {
    let loginUrl = API_URL + '/login';
    return new HttpClient(this.http).post<any>(loginUrl, credentials, httpOptions);
  }

}
