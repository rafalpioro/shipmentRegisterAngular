import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CarrierComponent} from "./carrier/carrier.component";
import {ClientComponent} from "./client/client.component";
import {ProjectComponent} from "./project/project.component";
import {ShipmentComponent} from "./shipment/shipment.component";
import {AuthenticationGuard} from "./service/security/authentication-guard";
import {LoginComponent} from "./login/login.component";
import {UserComponent} from "./admin/user/user.component";
import {RecipientComponent} from "./recipient/recipient.component";
import {WelcomeComponent} from "./shared/welcome/welcome.component";


const routes: Routes = [
  {
    path: 'admin',
    component: UserComponent,
    canActivate: [AuthenticationGuard],
    data: { role: ['ROLE_ADMIN']}
  },
  {
    path: 'carriers',
    component: CarrierComponent,
    canActivate: [AuthenticationGuard],
    data: { role: ['ROLE_VIEWER', 'ROLE_USER', 'ROLE_ADMIN']}
  },
  {
    path: 'clients',
    component: ClientComponent,
    canActivate: [AuthenticationGuard],
    data: { role: ['ROLE_VIEWER', 'ROLE_USER', 'ROLE_ADMIN']}
  },
  {
    path: 'projects',
    component: ProjectComponent,
    canActivate: [AuthenticationGuard],
    data: { role: ['ROLE_VIEWER', 'ROLE_USER', 'ROLE_ADMIN']}
  },
  {
    path: 'recipients',
    component: RecipientComponent,
    canActivate: [AuthenticationGuard],
    data: { role: ['ROLE_VIEWER', 'ROLE_USER', 'ROLE_ADMIN']}
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
    path: '',
    component: WelcomeComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
