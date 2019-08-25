import { Injectable } from '@angular/core';
import {Userr} from "../../model/userr";
import {Observable} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../../environments/environment";



@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  private URL =environment.baseUrl+"/admin-all/users";


  constructor(private http:HttpClient) { }

  allUsers(): Observable<Userr[]>{

    return this.http.get<[]>(this.URL);
  }

  addNewUser(user: Userr):Observable<any>{
    return this.http.post<Userr>(this.URL, user);
  }

  getUserByEmail(email: string): Observable<Userr[]>{
    return this.http.get<Userr[]>(this.URL+"/name", {params: new HttpParams()
        .append('email', email)} );
  }


  getUserById(id: number): Observable<Userr>{
    return this.http.get<Userr>(this.URL +"/"+id);
  }

  updateUser(user: Userr): Observable<any>{
    return this.http.put(this.URL +"/"+user.id, user);
  }

  deactivateUser(id: number):Observable<any>{
    return this.http.patch(this.URL+"/"+id, null);
  }

  deleteUser(id: number):Observable<any>{
    return this.http.delete(this.URL+"/"+id);
  }

}
