import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Client} from "../model/client";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ClientApiService {

  private URL =environment.baseUrl+"/clients";

  constructor(private http:HttpClient) { }

  allClientWithPagination(sort: string, page: string, size: string): Observable<Client[]>{
    return this.http.get<Client[]>(this.URL, {
      params: new HttpParams()
        .append('sort', sort)
        .append('page', page)
        .append('size', size)
    })
  }

  allClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.URL);
  }

  addNewClient(client: Client):Observable<any>{
    return this.http.post<Client>(this.URL, client);
  }

  deactivateClient(id: number):Observable<any>{
    return this.http.patch(this.URL+"/"+id, null);
  }

  getClientByName(name: string): Observable<Client[]>{
    return this.http.get<Client[]>(this.URL+"/name", {params: new HttpParams()
        .append('name', name)} );
  }

  getClientById(id: number): Observable<Client>{
    return this.http.get<Client>(this.URL +"/"+id);
  }

  updateClient(client: Client): Observable<any>{
    return this.http.put(this.URL +"/"+client.id,client);
  }
}
