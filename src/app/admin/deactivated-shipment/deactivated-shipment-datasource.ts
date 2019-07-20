import {BehaviorSubject, Observable, of} from "rxjs";
import {Shipment} from "../../model/shipment";
import {CollectionViewer, DataSource} from "@angular/cdk/collections";
import {catchError, finalize} from "rxjs/operators";
import {AdminShipmentApiService} from "./admin-shipment-api.service";

export class DeactivatedShipmentDatasource implements DataSource<Shipment> {
  private shipmentSubject = new BehaviorSubject<Shipment[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);


  public loading$ = this.loadingSubject.asObservable();

  constructor(private adminShipmentService: AdminShipmentApiService) {}

  connect(collectionViewer: CollectionViewer): Observable<Shipment[]> {
    return this.shipmentSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.shipmentSubject.complete();
    this.loadingSubject.complete();
  }

  loadShipments(page: string, size: string) {

    this.loadingSubject.next(true);

    this.adminShipmentService.allDeactivetedShipemntsWithPagination(
      page, size).pipe(
      catchError(() => of([])),
      finalize(() => this.loadingSubject.next(false))
    )
      .subscribe(shipment => {this.shipmentSubject.next(shipment["content"])});
  }
}
