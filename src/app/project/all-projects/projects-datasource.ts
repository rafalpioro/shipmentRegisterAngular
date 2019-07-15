import {BehaviorSubject, Observable, of} from "rxjs";

import {CollectionViewer, DataSource} from "@angular/cdk/collections";
import {catchError, finalize} from "rxjs/operators";
import {Project} from "../../model/project";
import {ProjectApiService} from "../project-api.service";

export class ProjectsDatasource implements DataSource<Project>{

  private projectSubject = new BehaviorSubject<Project[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);


  public loading$ = this.loadingSubject.asObservable();

  constructor(private projectService: ProjectApiService) {}

  connect(collectionViewer: CollectionViewer): Observable<Project[]> {
    return this.projectSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.projectSubject.complete();
    this.loadingSubject.complete();
  }

  loadProjects(page: string, size: string) {

    this.loadingSubject.next(true);

    this.projectService.allProjectsWithPagination(
      page, size).pipe(
      catchError(() => of([])),
      finalize(() => this.loadingSubject.next(false))
    )
      .subscribe(project => {this.projectSubject.next(project["content"])});
  }
}
