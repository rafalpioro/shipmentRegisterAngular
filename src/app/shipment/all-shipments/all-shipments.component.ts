import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ShipmentsDatasource} from "./shipments-datasource";
import {Shipment} from "../../model/shipment";
import {ShipmentApiService} from "../shipment-api.service";
import {Router} from "@angular/router";
import {tap} from "rxjs/operators";
import {MatPaginator} from "@angular/material";

@Component({
  selector: 'app-all-shipments',
  templateUrl: './all-shipments.component.html',
  styleUrls: ['./all-shipments.component.css']
})
export class AllShipmentsComponent implements AfterViewInit, OnInit {

  dataSource: ShipmentsDatasource;
  displayedColumns = ["id", "name", "surname","age", "clas", "timesWeekly", "dayOfWeek", "time", "edit"];
  public total_count: number;
  data:Shipment;

  private page: string = '0';
  private size: string = '5';

  @ViewChild(MatPaginator,{static:false}) paginator: MatPaginator;

  constructor(private shipmentService: ShipmentApiService, private router: Router) { }

  ngOnInit() {
    this.dataSource = new ShipmentsDatasource(this.shipmentService);
    this.dataSource.loadShipments(this.page,this.size);
    this.shipmentService.allShipments().subscribe(res=>{this.total_count = res.length});
  }

  ngAfterViewInit(): void {
    this.paginator.page
      .pipe(
        tap(() => this.loadShipmentPage())
      )
      .subscribe();
  }

  loadShipmentPage() {
    this.dataSource.loadShipments(
      this.paginator.pageIndex.toString(),
      this.paginator.pageSize.toString());
  }

  addShipment(){
    this.router.navigate(['']);
  }

  deactiveShipment(shipment: Shipment){
    if(confirm("Are you sure you want to delete the shipment?")){
      this.shipmentService.deactiveShipment(shipment.id).subscribe(
        res =>{
          this.shipmentService.allShipments().subscribe(res=>{this.total_count = res.length});
          this.loadShipmentPage();
        },
        err=>{alert("Could not delete shipment")}
      );
    }
  }

}
