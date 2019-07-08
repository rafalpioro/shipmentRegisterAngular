import { Injectable } from '@angular/core';
import {HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import {CarrierType} from "../../model/carrier-type";

@Injectable({
  providedIn: 'root'
})
export class CarrierTypeApiService {

  private URL ="http://localhost:8080/admin/carriertypes";

  constructor(private http:HttpClient) { }

  allCarrierTypes(): Observable<CarrierType[]> {
    return this.http.get<CarrierType[]>(this.URL);
  }

  addNewCarrierTypes(carrierType: CarrierType):Observable<any>{
    return this.http.post<CarrierType>(this.URL, carrierType);
  }

  deleteCarrierType(id: number):Observable<any>{
    return this.http.patch(this.URL+"/"+id, null);
  }

  updateCarrierType(carrierType: CarrierType): Observable<any>{
    return this.http.put(this.URL +"/"+carrierType.id,carrierType);
  }
}
