import {BehaviorSubject, Observable, of} from "rxjs";
import {CollectionViewer, DataSource} from "@angular/cdk/collections";
import {catchError, finalize} from "rxjs/operators";
import {Client} from "../../model/client";
import {ClientApiService} from "../client-api.service";

export class ClientsDatasource implements DataSource<Client> {

  private clientSubject = new BehaviorSubject<Client[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);


  public loading$ = this.loadingSubject.asObservable();

  constructor(private clientService: ClientApiService) {}

  connect(collectionViewer: CollectionViewer): Observable<Client[]> {
    return this.clientSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.clientSubject.complete();
    this.loadingSubject.complete();
  }

  loadClients(page: string, size: string) {

    this.loadingSubject.next(true);

    this.clientService.allClientWithPagination(
      page, size).pipe(
      catchError(() => of([])),
      finalize(() => this.loadingSubject.next(false))
    )
      .subscribe(client => {this.clientSubject.next(client["content"])});
  }
}

