import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import {BranchComponent} from "./branch/branch.component";
import {MaterialModule} from "../material.module";
import {CarrierTypeComponent} from "./carrier-type/carrier-type.component";
import {CountryComponent} from "./country/country.component";
import {DeactivatedShipmentComponent} from "./deactivated-shipment/deactivated-shipment.component";
import {IncotermsComponent} from "./incoterms/incoterms.component";
import {ProjectStatusComponent} from "./project-status/project-status.component";
import {RoleComponent} from "./role/role.component";
import {ShipmentStatusComponent} from "./shipment-status/shipment-status.component";
import {StatisticsComponent} from "./statistics/statistics.component";
import {UserShipmentsComponent} from "./statistics/user-shipments/user-shipments.component";
import {TransactionTypeComponent} from "./transaction-type/transaction-type.component";
import {UserComponent} from "./user/user.component";
import {AdminRoutingModule} from "./admin-routing.module";


@NgModule({
  declarations: [
    BranchComponent,
    CarrierTypeComponent,
    CountryComponent,
    DeactivatedShipmentComponent,
    IncotermsComponent,
    ProjectStatusComponent,
    RoleComponent,
    ShipmentStatusComponent,
    StatisticsComponent,
    UserShipmentsComponent,
    TransactionTypeComponent,
    UserComponent


  ],
  imports: [
    CommonModule,
    MaterialModule,
    NgxChartsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
