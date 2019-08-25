import { Component, OnInit } from '@angular/core';
import {AdminShipmentApiService} from "../../deactivated-shipment/admin-shipment-api.service";

@Component({
  selector: 'app-user-shipments',
  templateUrl: './user-shipments.component.html',
  styleUrls: ['./user-shipments.component.css']
})
export class UserShipmentsComponent implements OnInit {

  title = 'Shipment statistics';
  view: any[] = [1000, 400];
  // options for the chart
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Userr';
  showYAxisLabel = true;
  yAxisLabel = 'Quantity';
  timeline = true;
  colorScheme = {
    domain: ['#9370DB', '#87CEFA', '#FA8072', '#FF7F50', '#90EE90', '#9370DB']
  };
  showLabels = true;
  data: any[];

  constructor(private userServiceApi: AdminShipmentApiService) { }


  ngOnInit() {
    this.userServiceApi.getUserShipmentCount().subscribe(
      value => this.data = value.map(datum =>({name:datum.email, value:datum.count})));
  }


}
