import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Shipment} from "../model/shipment";

@Injectable({
  providedIn: 'root'
})
export class ShipmentApiService {

  private URL ="http://localhost:8080/shipments";

  constructor(private http:HttpClient) { }

  // findStudents(
  //   page = 1, size = 5, name = ''):  Observable<Student[]> {
  //
  //   return this.http.get<Student[]>(this.URL, {
  //     params: new HttpParams()
  //
  //       .append('page', page.toString())
  //       .append('size', size.toString())
  //       .append('name', name.toString())
  //   })
  // }

  allShipmentsWithPagination(page: string, size: string): Observable<Shipment[]>{
    return this.http.get<[]>(this.URL, {
          params: new HttpParams()
            .append('page', page)
            .append('size', size)
    })
  }

  allShipments(): Observable<Shipment[]> {
    return this.http.get<[]>(this.URL);
  }

  addNewShipment(student: Shipment):Observable<any>{
    return this.http.post<Shipment[]>(this.URL, student);
  }

  deactiveShipment(id: number):Observable<any>{
    return this.http.patch(this.URL+"/"+id, null);
  }

  getShipmentById(id: number): Observable<Shipment>{
    return this.http.get<Shipment>(this.URL +"/"+id);
  }

  updateShipment(student: Shipment): Observable<any>{
    return this.http.put(this.URL +"/"+student.id,student);
  }


}
