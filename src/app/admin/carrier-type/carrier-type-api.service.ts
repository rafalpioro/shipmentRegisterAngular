import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {CarrierType} from "../../model/carrier-type";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CarrierTypeApiService {

  URL =environment.baseUrl+"/admin/carriertypes";

  constructor(private http:HttpClient) { }

  allCarrierTypes(): Observable<CarrierType[]> {
    return this.http.get<CarrierType[]>(this.URL);
  }

  getCarrierTypeByName(name: string): Observable<CarrierType[]>{
    return this.http.get<CarrierType[]>(this.URL+"/name", {params: new HttpParams()
        .append('name', name)} );
  }

  addNewCarrierType(carrierType: CarrierType):Observable<any>{
    return this.http.post<CarrierType>(this.URL, carrierType);
  }

  deleteCarrierType(id: number):Observable<any>{
    return this.http.delete(this.URL+"/"+id);
  }

  updateCarrierType(carrierType: CarrierType): Observable<any>{
    return this.http.put(this.URL +"/"+carrierType.id, carrierType);
  }
}
