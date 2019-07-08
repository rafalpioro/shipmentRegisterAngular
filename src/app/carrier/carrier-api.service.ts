import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

import {Carrier} from "../model/carrier";


@Injectable({
  providedIn: 'root'
})
export class CarrierApiService {

  private URL = "http://localhost:8080/carriers";

  constructor(private http: HttpClient) {
  }

  allCarriers(): Observable<Carrier[]> {
    return this.http.get<Carrier[]>(this.URL);
  }

  getCarrierById(id: number): Observable<Carrier>{
    return this.http.get<Carrier>(this.URL +"/"+id);
  }
  getCarrierByName(name: string): Observable<Carrier[]>{
    return this.http.get<Carrier[]>(this.URL+"/name", {params: new HttpParams()
        .append('name', name)} );
  }

  deactivateCarrier(id: number):Observable<any>{
    return this.http.patch(this.URL+"/"+id, null);
  }

  addNewCarrier(carrier: Carrier): Observable<any> {
    return this.http.post<Carrier>(this.URL, carrier);
  }

  deleteCarrier(id: number): Observable<any> {
    return this.http.patch(this.URL + "/" + id, null);
  }

  updateCarrier(carrier: Carrier): Observable<any> {
    return this.http.put(this.URL + "/" + carrier.id, carrier);
  }
}
