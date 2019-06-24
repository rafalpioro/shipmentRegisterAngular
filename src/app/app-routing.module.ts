import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CarrierComponent} from "./carrier/carrier.component";
import {ClientComponent} from "./client/client.component";
import {ProjectComponent} from "./project/project.component";
import {RecipientComponent} from "./recipient/recipient.component";
import {ShipmentComponent} from "./shipment/shipment.component";


const routes: Routes = [{
  path: 'carrier',
  component: CarrierComponent
},
  {
    path: 'client',
    component: ClientComponent
  },
  {
    path: 'project',
    component: ProjectComponent
  },
  {
    path: 'recipient',
    component: RecipientComponent
  },
  {
    path: 'shipment',
    component: ShipmentComponent
  },
  {
    path: '',
    component: ClientComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
