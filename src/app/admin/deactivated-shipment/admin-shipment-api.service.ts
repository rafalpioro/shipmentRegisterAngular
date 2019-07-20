import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Shipment} from "../../model/shipment";

@Injectable({
  providedIn: 'root'
})
export class AdminShipmentApiService {

  private URL ="http://localhost:8080/admin-all/shipments-deactivated";

  constructor(private http:HttpClient) { }

  allDeactivetedShipemntsWithPagination(page: string, size: string): Observable<Shipment[]>{
    return this.http.get<Shipment[]>(this.URL, {
      params: new HttpParams()
        .append('page', page)
        .append('size', size)
    })
  }

  allDeactivetedShipemnts(): Observable<Shipment[]>{
    return this.http.get<Shipment[]>(this.URL);
  }
}
