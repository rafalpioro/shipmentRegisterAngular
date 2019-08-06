import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {UserComponent} from "./user/user.component";
import {AuthenticationGuard} from "../service/security/authentication-guard";
import {DeactivatedShipmentComponent} from "./deactivated-shipment/deactivated-shipment.component";
import {BranchComponent} from "./branch/branch.component";
import {CountryComponent} from "./country/country.component";
import {CarrierTypeComponent} from "./carrier-type/carrier-type.component";
import {ProjectStatusComponent} from "./project-status/project-status.component";
import {IncotermsComponent} from "./incoterms/incoterms.component";
import {UserShipmentsComponent} from "./statistics/user-shipments/user-shipments.component";

const routes: Routes = [
  {
    path: 'admin',
    component: UserComponent,
    canActivate: [AuthenticationGuard],
    data: { role: ['ROLE_ADMIN']}
  },
  {
    path: 'admin/deactivated-shipments',
    component: DeactivatedShipmentComponent,
    canActivate: [AuthenticationGuard],
    data: { role: ['ROLE_ADMIN']}
  },
  {
    path: 'admin/branches',
    component: BranchComponent,
    canActivate: [AuthenticationGuard],
    data: { role: ['ROLE_ADMIN']}
  },
  {
    path: 'admin/countries',
    component: CountryComponent,
    canActivate: [AuthenticationGuard],
    data: { role: ['ROLE_ADMIN']}
  },
  {
    path: 'admin/carrier-types',
    component: CarrierTypeComponent,
    canActivate: [AuthenticationGuard],
    data: { role: ['ROLE_ADMIN']}
  },
  {
    path: 'admin/project-statuses',
    component: ProjectStatusComponent,
    canActivate: [AuthenticationGuard],
    data: { role: ['ROLE_ADMIN']}
  },
  {
    path: 'admin/incoterms',
    component: IncotermsComponent,
    canActivate: [AuthenticationGuard],
    data: { role: ['ROLE_ADMIN']}
  },
  {
    path: 'admin/users',
    component: UserComponent,
    canActivate: [AuthenticationGuard],
    data: { role: ['ROLE_ADMIN']}
  },
  {
    path: 'admin/stat/user-shipment',
    component: UserShipmentsComponent,
    canActivate: [AuthenticationGuard],
    data: { role: ['ROLE_ADMIN']}
  },
  ];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
