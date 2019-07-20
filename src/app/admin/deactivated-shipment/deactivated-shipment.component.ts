import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Shipment} from "../../model/shipment";
import { MatPaginator, MatSort} from "@angular/material";
import {AuthenticationService} from "../../service/security/authentication.service";
import {Router} from "@angular/router";
import {tap} from "rxjs/operators";

import {AdminShipmentApiService} from "./admin-shipment-api.service";
import {DeactivatedShipmentDatasource} from "./deactivated-shipment-datasource";
import {ShipmentApiService} from "../../shipment/shipment-api.service";

@Component({
  selector: 'app-deactivated-shipment',
  templateUrl: './deactivated-shipment.component.html',
  styleUrls: ['./deactivated-shipment.component.css']
})
export class DeactivatedShipmentComponent implements AfterViewInit, OnInit {

  displayedColumns = ['branch', 'user', 'project', 'recipient', 'shipmentStatus', 'sendDate', 'carrier', 'deliveryDate' , 'pod',  'transactionType', 'mrn', 'edit'];

  dataSource :  DeactivatedShipmentDatasource;
  public total_count: number;
  data: Shipment;

  @ViewChild(MatSort, {static:false}) sort: MatSort;
  @ViewChild(MatPaginator, {static:false}) paginator: MatPaginator;

  private page: string = '0';
  private size: string = '5';

  constructor(private authenticationService: AuthenticationService, private shipmentService: ShipmentApiService, private adminShipmentService: AdminShipmentApiService) { }

  ngOnInit() {
    this.show();
  }

  show() {
    this.dataSource = new DeactivatedShipmentDatasource(this.adminShipmentService);
    this.dataSource.loadShipments(this.page,this.size);
    this.adminShipmentService.allDeactivetedShipemnts().subscribe(res=>{this.total_count = res.length});
  }

  ngAfterViewInit() {
    this.paginator.page
      .pipe(
        tap(() => {
          this.loadShipmentPage();

        })
      )
      .subscribe();
  }

  loadShipmentPage() {
    this.dataSource.loadShipments(
      this.paginator.pageIndex.toString(),
      this.paginator.pageSize.toString());
  }


  deleteShipment(shipment: Shipment){
    if(confirm("Are you sure you want to permanently delete the shipment??")){
      this.shipmentService.deleteShipment(shipment.id).subscribe(
        res =>{
          this.shipmentService.allShipments().subscribe(res=>{this.total_count = res.length});
          this.loadShipmentPage();
        },
        err=>{alert("Could not delete project")}
      );
    }
  }

  openDialog(shipment: Shipment){

    // const dialogConfig = new MatDialogConfig();
    //
    //
    // this.data = shipment;
    //
    // dialogConfig.disableClose = true;
    // dialogConfig.autoFocus = true;
    // dialogConfig.data = this.data;
    // dialogConfig.width = '500px';
    //
    // const dialogRef = this.dialog.open(EditShipmentComponent, dialogConfig);
    //
    // dialogRef.afterClosed().subscribe(data => this.shipmentService.updateShipment(shipment)
    //   .subscribe(res=>{
    //     this.data = res;
    //
    //     this.show();
    //   },error1 => {
    //     alert("Alert form openDialog")
    //   })
    // );
  }
}
