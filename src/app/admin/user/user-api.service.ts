import { Injectable } from '@angular/core';
import {User} from "../../model/user";
import {Observable} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {AuthenticationService} from "../../service/security/authentication.service";

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  private URL ="http://localhost:8080/admin/users";
  private URL1 ="http://localhost:8080/users";

  constructor(private http:HttpClient, private authService: AuthenticationService) { }

  allUsers(): Observable<User[]>{

    return this.http.get<[]>(this.URL);
  }

  currentUser(): Observable<User>{

    var user = this.authService.getCurrentUser();
    return this.http.get<User>(this.URL1, {params: new HttpParams().append('email',user)});
  }


}
