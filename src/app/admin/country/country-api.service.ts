import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Country} from "../../model/country";
import {environment} from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class CountryApiService {

  URL =environment.baseUrl+"/admin/countries";

  constructor(private http:HttpClient) { }

  allCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.URL);
  }

  getCountryTypeByName(name: string): Observable<Country[]>{
    return this.http.get<Country[]>(this.URL+"/name", {params: new HttpParams()
        .append('name', name)} );
  }

  addNewCountry(country: Country):Observable<any>{
    return this.http.post<Country>(this.URL, country);
  }

  deleteCountry(id: number):Observable<any>{
    return this.http.delete(this.URL+"/"+id);
  }

  updateCountry(country: Country): Observable<any>{
    return this.http.put(this.URL +"/"+country.id, country);
  }
}
