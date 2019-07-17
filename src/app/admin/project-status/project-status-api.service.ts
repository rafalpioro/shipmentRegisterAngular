import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
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

  addNewProjectStatus(projectStatus: ProjectStatus):Observable<any>{
    return this.http.post<ProjectStatus>(this.URL, projectStatus);
  }

  deactivateProjectStatus(id: number):Observable<any>{
    return this.http.patch(this.URL+"/"+id, null);
  }

  updateProjectStatus(projectStatus: ProjectStatus): Observable<any>{
    return this.http.put(this.URL +"/"+projectStatus.id, projectStatus);
  }
}
