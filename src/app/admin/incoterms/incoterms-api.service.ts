import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Incoterms} from "../../model/incoterms";
import {environment} from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class IncotermsApiService {

  URL =environment.baseUrl+"/admin/incoterms";

  constructor(private http:HttpClient) { }

  allIncoterms(): Observable<Incoterms[]> {
    return this.http.get<Incoterms[]>(this.URL);
  }

  getIncotermByName(name: string): Observable<Incoterms[]>{
    return this.http.get<Incoterms[]>(this.URL+"/name", {params: new HttpParams()
        .append('name', name)} );
  }

  addNewIncoterm(incoterm: Incoterms):Observable<any>{
    return this.http.post<Incoterms>(this.URL, incoterm);
  }

  deleteIncoterm(id: number):Observable<any>{
    return this.http.delete(this.URL+"/"+id);
  }

  updateIncoterm(incoterm: Incoterms): Observable<any>{
    return this.http.put(this.URL +"/"+incoterm.id, incoterm);
  }
}
