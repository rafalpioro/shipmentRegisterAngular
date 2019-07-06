import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

import {Recipient} from "../model/recipient";

@Injectable({
  providedIn: 'root'
})
export class RecipientApiService {

  private URL ="http://localhost:8080/recipients";

  constructor(private http:HttpClient) { }

  allRecipientsWithPagination(page: string, size: string): Observable<Recipient[]>{
    return this.http.get<[]>(this.URL, {
      params: new HttpParams()
        .append('page', page)
        .append('size', size)
    })
  }

  allRecipients(): Observable<Recipient[]> {
    return this.http.get<[]>(this.URL);
  }

  addNewRecipient(recipient: Recipient):Observable<any>{
    return this.http.post<Recipient[]>(this.URL, recipient);
  }

  deactivateRecipient(id: number):Observable<any>{
    return this.http.patch(this.URL+"/"+id, null);
  }

  getRecipientByName(name: string): Observable<Recipient>{
    return this.http.get<Recipient>(this.URL, {params: new HttpParams()
        .append('name', name)} );
  }

  getRecipientById(id: number): Observable<Recipient>{
    return this.http.get<Recipient>(this.URL +"/"+id);
  }

  updateRecipient(recipient: Recipient): Observable<any>{
    return this.http.put(this.URL +"/"+recipient.id,recipient);
  }

}
