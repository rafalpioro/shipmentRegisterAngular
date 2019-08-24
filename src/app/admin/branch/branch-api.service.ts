import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Branch} from "../../model/branch";
import {environment} from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class BranchApiService {

  private URL =environment.baseUrl + "/admin/branches";

  constructor(private http:HttpClient) { }

  allBranches(): Observable<Branch[]> {
    return this.http.get<Branch[]>(this.URL);
  }

  getBranchByName(name: string): Observable<Branch[]>{
    return this.http.get<Branch[]>(this.URL+"/name", {params: new HttpParams()
        .append('name', name)} );
  }

  addNewBranch(branch: Branch):Observable<any>{
    return this.http.post<Branch>(this.URL, branch);
  }

  deleteBranch(id: number):Observable<any>{
    return this.http.delete(this.URL+"/"+id);
  }

  updateBranch(branch: Branch): Observable<any>{
    return this.http.put(this.URL +"/"+branch.id, branch);
  }
}
