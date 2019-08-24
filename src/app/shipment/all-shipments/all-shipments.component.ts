import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ShipmentsDatasource} from "./shipments-datasource";
import {Shipment} from "../../model/shipment";
import {ShipmentApiService} from "../shipment-api.service";
import {Router} from "@angular/router";
import {tap} from "rxjs/operators";
import {MatDialog, MatDialogConfig, MatPaginator, MatSort} from "@angular/material";
import {AuthenticationService} from "../../service/security/authentication.service";
import {EditShipmentComponent} from "../edit-shipment/edit-shipment.component";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-all-shipments',
  templateUrl: './all-shipments.component.html',
  styleUrls: ['./all-shipments.component.css']
})
export class AllShipmentsComponent implements AfterViewInit, OnInit {

  displayedColumns = ['branch', 'user', 'project', 'recipient', 'incoterms', 'shipmentStatus', 'sendDate', 'carrier', 'deliveryDate' , 'pod',  'transactionType', 'mrn', 'edit'];
  displayedColumnsForViewer = ['branch', 'user', 'project', 'recipient', 'incoterms', 'shipmentStatus', 'sendDate', 'carrier', 'deliveryDate' , 'pod',  'transactionType', 'mrn'];


  dataSource :  ShipmentsDatasource;
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
    this.dataSource = new ShipmentsDatasource(this.shipmentService);
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
    this.router.navigate(['/shipments/add']);
  }

  deactivateShipment(shipment: Shipment){
    if(confirm("Are you sure you want to delete the shipment??")){
      this.shipmentService.toggleShipmentActive(shipment.id).subscribe(
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
