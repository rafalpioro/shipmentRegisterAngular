import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CarrierType} from "../../model/carrier-type";
import {Incoterms} from "../../model/incoterms";

@Injectable({
  providedIn: 'root'
})
export class IncotermsApiService {

  private URL ="http://localhost:8080/admin/incoterms";

  constructor(private http:HttpClient) { }

  allIncoterms(): Observable<Incoterms[]> {
    return this.http.get<CarrierType[]>(this.URL);
  }

  addNewIncoterms(incoterms: Incoterms):Observable<any>{
    return this.http.post<Incoterms>(this.URL, incoterms);
  }

  deleteIncoterms(id: number):Observable<any>{
    return this.http.delete(this.URL+"/"+id);
  }

  updateIncoterms(incoterms: Incoterms): Observable<any>{
    return this.http.put(this.URL +"/"+incoterms.id,incoterms);
  }
}
