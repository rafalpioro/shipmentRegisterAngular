import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CarrierComponent} from "./carrier/carrier.component";
import {ClientComponent} from "./client/client.component";
import {ProjectComponent} from "./project/project.component";
import {RecipientComponent} from "./recipient/recipient.component";
import {ShipmentComponent} from "./shipment/shipment.component";
import {AuthenticationGuard} from "./service/security/authentication-guard";
import {LoginComponent} from "./login/login.component";
import {UserComponent} from "./admin/user/user.component";


const routes: Routes = [{
  path: 'carrier',
  component: CarrierComponent
},
  {
    path: 'client',
    component: ClientComponent,
    canActivate: [AuthenticationGuard],
    data: { role: ['ROLE_']}
  },
  {
    path: 'project',
    component: ProjectComponent,
    canActivate: [AuthenticationGuard],
    data: { role: ['ROLE_']}
  },
  {
    path: 'user',
    component: UserComponent,
    canActivate: [AuthenticationGuard],
    data: { role: ['ROLE_ADMIN']}
  },
  {
    path: 'login',
    component: LoginComponent
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
