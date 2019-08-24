import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {ShipmentStatus} from "../../model/shipment-status";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ShipmentStatusApiService {

  private URL =environment.baseUrl+"/admin/shipmentstatus";

  constructor(private http:HttpClient) { }

  allShipmentStatus(): Observable<ShipmentStatus[]> {
    return this.http.get<ShipmentStatus[]>(this.URL);
  }

  addNewShipmentStatus(shipmentStatus: ShipmentStatus):Observable<any>{
    return this.http.post<ShipmentStatus>(this.URL, shipmentStatus);
  }

  deactivateShipmentStatus(id: number):Observable<any>{
    return this.http.patch(this.URL+"/"+id, null);
  }

  updateShipmentStatus(shipmentStatus: ShipmentStatus): Observable<any>{
    return this.http.put(this.URL +"/"+shipmentStatus.id, shipmentStatus);
  }
}
