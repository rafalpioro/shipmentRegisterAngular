import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ShipmentsDatasource} from "../shipments-datasource";
import {Shipment} from "../../../model/shipment";
import {MatDialog, MatDialogConfig, MatPaginator, MatSort} from "@angular/material";
import {AuthenticationService} from "../../../service/security/authentication.service";
import {ShipmentApiService} from "../../shipment-api.service";
import {Router} from "@angular/router";
import {tap} from "rxjs/operators";
import {EditShipmentComponent} from "../../edit-shipment/edit-shipment.component";
import {MyShipmentDatasource} from "./my-shipment-datasource";

@Component({
  selector: 'app-my-shipments',
  templateUrl: './my-shipments.component.html',
  styleUrls: ['./my-shipments.component.css']
})
export class MyShipmentsComponent implements AfterViewInit, OnInit {

  displayedColumns = ['branch', 'user', 'project', 'recipient', 'shipmentStatus', 'sendDate', 'carrier', 'deliveryDate' , 'pod',  'transactionType', 'mrn', 'edit'];
  displayedColumnsForViewer = ['branch', 'user', 'project', 'recipient', 'shipmentStatus', 'sendDate', 'carrier', 'deliveryDate' , 'pod',  'transactionType', 'mrn'];

  dataSource :  MyShipmentDatasource;
  public total_count: number;
  data: Shipment;

  @ViewChild(MatSort, {static:false}) sort: MatSort;
  @ViewChild(MatPaginator, {static:false}) paginator: MatPaginator;

  private page: string = '0';
  private size: string = '5';

  constructor(public authenticationService: AuthenticationService, private shipmentService: ShipmentApiService, private router: Router, public dialog: MatDialog) { }

  ngOnInit() {
    this.show();
  }

  show() {
    this.dataSource = new MyShipmentDatasource(this.shipmentService, this.authenticationService);
    this.dataSource.loadShipments(this.page,this.size);
    this.shipmentService.allShipments().subscribe(res=>{this.total_count = res.length});
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

  addShipment(){
    this.router.navigate(['shipments/add']);
  }

  deactivateShipment(shipment: Shipment){
    if(confirm("Are you sure you want to delete the shipment??")){
      this.shipmentService.deactivateShipment(shipment.id).subscribe(
        res =>{
          this.shipmentService.allShipments().subscribe(res=>{this.total_count = res.length});
          this.loadShipmentPage();
        },
        err=>{alert("Could not delete project")}
      );
    }
  }

  openDialog(shipment: Shipment){

    const dialogConfig = new MatDialogConfig();


    this.data = shipment;

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = this.data;
    dialogConfig.width = '500px';

    const dialogRef = this.dialog.open(EditShipmentComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(data => this.shipmentService.updateShipment(shipment)
      .subscribe(res=>{
        this.data = res;

        this.show();
      },error1 => {
        alert("Alert form openDialog")
      })
    );
  }

}
