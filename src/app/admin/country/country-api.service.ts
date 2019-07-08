import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Country} from "../../model/country";

@Injectable({
  providedIn: 'root'
})
export class CountryApiService {

  private URL ="http://localhost:8080/admin/countries";

  constructor(private http:HttpClient) { }

  allCountries(): Observable<Country[]> {
    return this.http.get<[]>(this.URL);
  }
}
