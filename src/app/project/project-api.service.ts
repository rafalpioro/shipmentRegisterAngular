import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Carrier} from "../model/carrier";
import {Project} from "../model/project";
import {Recipient} from "../model/recipient";

@Injectable({
  providedIn: 'root'
})
export class ProjectApiService {

  private URL = "http://localhost:8080/projects";

  constructor(private http: HttpClient) {
  }

  allProjectsWithPagination(page: string, size: string): Observable<Project[]>{
    return this.http.get<Project[]>(this.URL, {
      params: new HttpParams()
        .append('page', page)
        .append('size', size)
    })
  }

  allProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.URL);
  }

  getProjectById(id: number): Observable<Project>{
    return this.http.get<Project>(this.URL +"/"+id);
  }
  getProjectByNumber(number: string): Observable<Project>{
    return this.http.get<Project>(this.URL+"/number", {params: new HttpParams()
        .append('number', number)} );
  }

  deactivateProject(id: number):Observable<any>{
    return this.http.patch(this.URL+"/"+id, null);
  }

  addNewProject(project: Project): Observable<any> {
    return this.http.post<Project>(this.URL, project);
  }

  deleteProject(id: number): Observable<any> {
    return this.http.patch(this.URL + "/" + id, null);
  }

  updateProject(project: Project): Observable<any> {
    return this.http.put(this.URL + "/" + project.id, project);
  }
}
