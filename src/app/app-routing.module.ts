import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CarrierComponent} from "./carrier/carrier.component";
import {ClientComponent} from "./client/client.component";
import {ProjectComponent} from "./project/project.component";
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
    data: { role: ['ROLE_VIEWER', 'ROLE_USER', 'ROLE_ADMIN']}
  },
  {
    path: 'project',
    component: ProjectComponent,
    canActivate: [AuthenticationGuard],
    data: { role: ['ROLE_VIEWER', 'ROLE_USER', 'ROLE_ADMIN']}
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
    component: ShipmentComponent,
    canActivate: [AuthenticationGuard],
    data: { role: ['ROLE_VIEWER', 'ROLE_USER', 'ROLE_ADMIN']}
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
