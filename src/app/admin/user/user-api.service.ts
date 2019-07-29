import { Injectable } from '@angular/core';
import {User} from "../../model/user";
import {Observable} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";



@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  private URL ="http://localhost:8080/admin-all";


  constructor(private http:HttpClient) { }

  allUsers(): Observable<User[]>{

    return this.http.get<[]>(this.URL+"/users");
  }

  addNewUser(user: User):Observable<any>{
    return this.http.post<User>(this.URL, user);
  }

  getUserByEmail(name: string): Observable<User[]>{
    return this.http.get<User[]>(this.URL+"/name", {params: new HttpParams()
        .append('name', name)} );
  }


  getUserById(id: number): Observable<User>{
    return this.http.get<User>(this.URL +"/"+id);
  }

  updateUser(user: User): Observable<any>{
    return this.http.put(this.URL +"/"+user.id, user);
  }

  deactivateUser(id: number):Observable<any>{
    return this.http.patch(this.URL+"/"+id, null);
  }

  deleteUser(id: number):Observable<any>{
    return this.http.delete(this.URL+"/"+id);
  }

}
