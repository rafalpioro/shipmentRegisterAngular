import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProjectStatus} from "../../model/project-status";


@Injectable({
  providedIn: 'root'
})
export class ProjectStatusApiService {

  private URL ="http://localhost:8080/admin/projectstatus";

  constructor(private http:HttpClient) { }

  allProjectStatus(): Observable<ProjectStatus[]> {
    return this.http.get<ProjectStatus[]>(this.URL);
  }

  getProjectStatusByName(name: string): Observable<ProjectStatus[]>{
    return this.http.get<ProjectStatus[]>(this.URL+"/name", {params: new HttpParams()
        .append('name', name)} );
  }

  addNewProjectStatus(projectStatus: ProjectStatus):Observable<any>{
    return this.http.post<ProjectStatus>(this.URL, projectStatus);
  }

  deleteProjectStatus(id: number):Observable<any>{
    return this.http.delete(this.URL+"/"+id);
  }

  updateProjectStatus(projectStatus: ProjectStatus): Observable<any>{
    return this.http.put(this.URL +"/"+projectStatus.id, projectStatus);
  }
}
