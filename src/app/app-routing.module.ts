import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CarrierComponent} from "./carrier/carrier.component";
import {ClientComponent} from "./client/client.component";
import {ProjectComponent} from "./project/project.component";
import {ShipmentComponent} from "./shipment/shipment.component";
import {AuthenticationGuard} from "./service/security/authentication-guard";
import {LoginComponent} from "./login/login.component";

import {RecipientComponent} from "./recipient/recipient.component";
import {WelcomeComponent} from "./shared/welcome/welcome.component";
import {AddRecipientComponent} from "./recipient/add-recipient/add-recipient.component";
import {AddCarrierComponent} from "./carrier/add-carrier/add-carrier.component";
import {AddClientComponent} from "./client/add-client/add-client.component";
import {AddProjectComponent} from "./project/add-project/add-project.component";
import {AddShipmentComponent} from "./shipment/add-shipment/add-shipment.component";




const routes: Routes = [
  {
    path: 'admin', loadChildren:() => import('./admin/admin.module').then(mod => mod.AdminModule)
  },

  {
    path: 'carriers',
    component: CarrierComponent,
    canActivate: [AuthenticationGuard],
    data: { role: ['ROLE_VIEWER', 'ROLE_USER', 'ROLE_ADMIN']}
  },
  {
    path: 'carriers/add',
    component: AddCarrierComponent,
    canActivate: [AuthenticationGuard],
    data: { role: ['ROLE_USER', 'ROLE_ADMIN']}
  },
  {
    path: 'clients',
    component: ClientComponent,
    canActivate: [AuthenticationGuard],
    data: { role: ['ROLE_VIEWER', 'ROLE_USER', 'ROLE_ADMIN']}
  },
  {
    path: 'clients/add',
    component: AddClientComponent,
    canActivate: [AuthenticationGuard],
    data: { role: ['ROLE_USER', 'ROLE_ADMIN']}
  },
  {
    path: 'projects',
    component: ProjectComponent,
    canActivate: [AuthenticationGuard],
    data: { role: ['ROLE_VIEWER', 'ROLE_USER', 'ROLE_ADMIN']}
  },
  {
    path: 'projects/add',
    component: AddProjectComponent,
    canActivate: [AuthenticationGuard],
    data: { role: ['ROLE_USER', 'ROLE_ADMIN']}
  },
  {
    path: 'recipients',
    component: RecipientComponent,
    canActivate: [AuthenticationGuard],
    data: { role: ['ROLE_VIEWER', 'ROLE_USER', 'ROLE_ADMIN']}
  },
  {
    path: 'recipients/add',
    component: AddRecipientComponent,
    canActivate: [AuthenticationGuard],
    data: { role: ['ROLE_USER', 'ROLE_ADMIN']}
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'shipments',
    component: ShipmentComponent,
    canActivate: [AuthenticationGuard],
    data: { role: ['ROLE_VIEWER', 'ROLE_USER', 'ROLE_ADMIN']}
  },
  {
    path: 'shipments/add',
    component: AddShipmentComponent,
    canActivate: [AuthenticationGuard],
    data: { role: ['ROLE_USER', 'ROLE_ADMIN']}
  },
  {
    path: '',
    component: WelcomeComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
