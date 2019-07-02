import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Credentials} from "./security/credentials";



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  observe: 'response' as 'body'
};
const API_URL = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class TokenizerService {


  constructor(private http: HttpClient) { }

  public getResponseHeaders(credentials: Credentials) {
    let loginUrl = API_URL + '/login';
    return this.http.post<any>(loginUrl, credentials, httpOptions);
  }

}
