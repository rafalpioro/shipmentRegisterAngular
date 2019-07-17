import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Shipment} from "../model/shipment";


@Injectable({
  providedIn: 'root'
})
export class ShipmentApiService {

  private URL = "http://localhost:8080/shipments";

  constructor(private http: HttpClient) {
  }

  allShipmentsWithPagination(page: string, size: string): Observable<Shipment[]>{
    return this.http.get<Shipment[]>(this.URL, {
      params: new HttpParams()
        .append('page', page)
        .append('size', size)
    })
  }

  allShipments(): Observable<Shipment[]> {
    return this.http.get<Shipment[]>(this.URL);
  }

  getShipmentById(id: number): Observable<Shipment>{
    return this.http.get<Shipment>(this.URL +"/"+id);
  }

  deactivateShipment(id: number):Observable<any>{
    return this.http.patch(this.URL+"/"+id, null);
  }

  addNewShipment(shipment: Shipment): Observable<any> {
    return this.http.post<Shipment>(this.URL, shipment);
  }

  deleteShipment(id: number): Observable<any> {
    return this.http.patch(this.URL + "/" + id, null);
  }

  updateShipment(shipment: Shipment): Observable<any> {
    return this.http.put(this.URL + "/" + shipment.id, shipment);
  }

}
