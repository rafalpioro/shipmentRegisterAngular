import {BehaviorSubject, Observable, of} from "rxjs";
import {Shipment} from "../../../model/shipment";
import {ShipmentApiService} from "../../shipment-api.service";
import {CollectionViewer, DataSource} from "@angular/cdk/collections";
import {catchError, finalize} from "rxjs/operators";
import {AuthenticationService} from "../../../service/security/authentication.service";

export class MyShipmentDatasource implements DataSource<Shipment>{
  private shipmentSubject = new BehaviorSubject<Shipment[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);


  public loading$ = this.loadingSubject.asObservable();

  constructor(private shipmentService: ShipmentApiService, private authenticationService: AuthenticationService) {
    this.authenticationService.getIdFromToken();
  }

  connect(collectionViewer: CollectionViewer): Observable<Shipment[]> {
    return this.shipmentSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.shipmentSubject.complete();
    this.loadingSubject.complete();
  }

  loadShipments(page: string, size: string) {

    this.loadingSubject.next(true);

    this.shipmentService.allUserShipmentsWithPagination(Number(this.authenticationService.getIdFromToken()),
      page, size).pipe(
      catchError(() => of([])),
      finalize(() => this.loadingSubject.next(false))
    )
      .subscribe(shipment => {this.shipmentSubject.next(shipment["content"])});
  }
}
