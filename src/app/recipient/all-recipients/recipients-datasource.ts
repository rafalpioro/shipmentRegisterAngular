import {BehaviorSubject, Observable, of} from "rxjs";

import {CollectionViewer, DataSource} from "@angular/cdk/collections";
import {catchError, finalize} from "rxjs/operators";
import {Recipient} from "../../model/recipient";
import {RecipientApiService} from "../recipient-api.service";

export class RecipientsDatasource implements DataSource<Recipient>{

  private recipientSubject = new BehaviorSubject<Recipient[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);


  public loading$ = this.loadingSubject.asObservable();

  constructor(private recipientService: RecipientApiService) {}

  connect(collectionViewer: CollectionViewer): Observable<Recipient[]> {
    return this.recipientSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.recipientSubject.complete();
    this.loadingSubject.complete();
  }

  loadRecipients(page: string, size: string) {

    this.loadingSubject.next(true);

    this.recipientService.allRecipientsWithPagination(
      page, size).pipe(
      catchError(() => of([])),
      finalize(() => this.loadingSubject.next(false))
    )
      .subscribe(student => {this.recipientSubject.next(student["content"])});
  }
}
