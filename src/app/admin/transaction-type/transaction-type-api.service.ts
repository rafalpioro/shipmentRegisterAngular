import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProjectStatus} from "../../model/project-status";
import {TransactionType} from "../../model/transaction-type";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TransactionTypeApiService {

  private URL =environment.baseUrl+"/admin/transactiontypes";

  constructor(private http:HttpClient) { }

  allTransactionTypes(): Observable<TransactionType[]> {
    return this.http.get<TransactionType[]>(this.URL);
  }

  addNewTransactionType(transactionType: TransactionType):Observable<any>{
    return this.http.post<ProjectStatus>(this.URL, transactionType);
  }

  deactivateTransactionType(id: number):Observable<any>{
    return this.http.patch(this.URL+"/"+id, null);
  }

  updateTransactionType(transactionType: TransactionType): Observable<any>{
    return this.http.put(this.URL +"/"+transactionType.id, transactionType);
  }
}
