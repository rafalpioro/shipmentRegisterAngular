import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Branch} from "../../model/branch";

@Injectable({
  providedIn: 'root'
})
export class BranchApiService {

  private URL ="http://localhost:8080/admin/branches";

  constructor(private http:HttpClient) { }

  allBranches(): Observable<Branch[]> {
    return this.http.get<Branch[]>(this.URL);
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
