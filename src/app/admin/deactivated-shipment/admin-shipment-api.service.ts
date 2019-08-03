import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Shipment} from "../../model/shipment";
import {CountUserShipment} from "../../model/stat/count-user-shipment";

@Injectable({
  providedIn: 'root'
})
export class AdminShipmentApiService {

  private URL ="http://localhost:8080/admin-all";

  constructor(private http:HttpClient) { }

  allDeactivetedShipemntsWithPagination(page: string, size: string): Observable<Shipment[]>{
    return this.http.get<Shipment[]>(this.URL+"/shipments-deactivated", {
      params: new HttpParams()
        .append('page', page)
        .append('size', size)
    })
  }

  allDeactivetedShipemnts(): Observable<Shipment[]>{
    return this.http.get<Shipment[]>(this.URL+"/shipments-deactivated");
  }

  getUserShipmentCount(): Observable<CountUserShipment[]> {
    return this.http.get<CountUserShipment[]>(this.URL+"/stat/count-user-shipments");
  }
}
