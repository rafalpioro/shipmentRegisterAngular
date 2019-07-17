import {CollectionViewer, DataSource} from "@angular/cdk/collections";
import {Shipment} from "../../model/shipment";
import {BehaviorSubject, Observable, of} from "rxjs";
import {catchError, finalize} from "rxjs/operators";
import {ShipmentApiService} from "../shipment-api.service";

export class ShipmentsDatasource implements DataSource<Shipment>{
  private shipmentSubject = new BehaviorSubject<Shipment[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);


  public loading$ = this.loadingSubject.asObservable();

  constructor(private shipmentService: ShipmentApiService) {}

  connect(collectionViewer: CollectionViewer): Observable<Shipment[]> {
    return this.shipmentSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.shipmentSubject.complete();
    this.loadingSubject.complete();
  }

  loadShipments(page: string, size: string) {

    this.loadingSubject.next(true);

    this.shipmentService.allShipmentsWithPagination(
      page, size).pipe(
      catchError(() => of([])),
      finalize(() => this.loadingSubject.next(false))
    )
      .subscribe(shipment => {this.shipmentSubject.next(shipment["content"])});
  }
}
