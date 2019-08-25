import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Userr} from "../../model/userr";

@Injectable({
  providedIn: 'root'
})
export class RoleApiService {

  private URL ="http://localhost:8080/admin/roles";

  constructor(private http:HttpClient) { }

  allRoles(): Observable<Userr[]>{

    return this.http.get<[]>(this.URL);
  }


}
