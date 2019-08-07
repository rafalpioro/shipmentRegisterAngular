import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule }    from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { FlexLayoutModule } from "@angular/flex-layout";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarrierComponent } from './carrier/carrier.component';
import { ClientComponent } from './client/client.component';
import { ProjectComponent } from './project/project.component';
import { RecipientComponent } from './recipient/recipient.component';
import { ShipmentComponent } from './shipment/shipment.component';
import { MenuComponent } from './shared/menu/menu.component';
import { LoginComponent } from './login/login.component';
import {JwtInterceptor} from "./service/security/jwt-interceptor";
import {TokenizerService} from "./service/tokenizer-service";
import {UserApiService} from "./admin/user/user-api.service";
import { WelcomeComponent } from './shared/welcome/welcome.component';
import { AllShipmentsComponent } from './shipment/all-shipments/all-shipments.component';
import {ShipmentApiService} from "./shipment/shipment-api.service";
import { AllRecipientsComponent } from './recipient/all-recipients/all-recipients.component';
import {RecipientApiService} from "./recipient/recipient-api.service";
import { EditRecipientComponent } from './recipient/edit-recipient/edit-recipient.component';
import {CountryApiService} from "./admin/country/country-api.service";
import { UniqueRecipientValidatorDirective } from './recipient/unique-recipient-validator.directive';
import { AddRecipientComponent } from './recipient/add-recipient/add-recipient.component';
import { AddCarrierComponent } from './carrier/add-carrier/add-carrier.component';
import { AllCarriersComponent } from './carrier/all-carriers/all-carriers.component';
import { EditCarrierComponent } from './carrier/edit-carrier/edit-carrier.component';
import {CarrierTypeApiService} from "./admin/carrier-type/carrier-type-api.service";
import {CarrierApiService} from "./carrier/carrier-api.service";
import {UniqueCarrierValidatorDirective} from "./carrier/unique-carrier-validator.directive";
import { AddClientComponent } from './client/add-client/add-client.component';
import { AllClientsComponent } from './client/all-clients/all-clients.component';
import { EditClientComponent } from './client/edit-client/edit-client.component';
import { UniqueClientValidatorDirective } from './client/unique-client-validator.directive';
import { AddProjectComponent } from './project/add-project/add-project.component';
import { AllProjectsComponent } from './project/all-projects/all-projects.component';
import { EditProjectComponent } from './project/edit-project/edit-project.component';
import { UniqueProjectValidatorDirective } from './project/unique-project-validator.directive';
import {ProjectApiService} from "./project/project-api.service";
import {ProjectStatusApiService} from "./admin/project-status/project-status-api.service";
import { AddShipmentComponent } from './shipment/add-shipment/add-shipment.component';
import { EditShipmentComponent } from './shipment/edit-shipment/edit-shipment.component';
import {TransactionTypeApiService} from "./admin/transaction-type/transaction-type-api.service";
import { MyShipmentsComponent } from './shipment/all-shipments/my-shipments/my-shipments.component';
import {AdminShipmentApiService} from "./admin/deactivated-shipment/admin-shipment-api.service";
import { MinuteSecondsPipe } from './shared/minute-seconds.pipe';
import {MaterialModule} from "./material.module";



@NgModule({
  declarations: [
    AppComponent,
    CarrierComponent,
    ClientComponent,
    ProjectComponent,
    RecipientComponent,
    ShipmentComponent,
    MenuComponent,
    LoginComponent,
    WelcomeComponent,
    AllShipmentsComponent,
    AllRecipientsComponent,
    EditRecipientComponent,
    UniqueRecipientValidatorDirective,
    UniqueCarrierValidatorDirective,
    AddRecipientComponent,
    AddCarrierComponent,
    AllCarriersComponent,
    EditCarrierComponent,
    AddClientComponent,
    AllClientsComponent,
    EditClientComponent,
    UniqueClientValidatorDirective,
    AddProjectComponent,
    AllProjectsComponent,
    EditProjectComponent,
    UniqueProjectValidatorDirective,
    AddShipmentComponent,
    EditShipmentComponent,
    MyShipmentsComponent,
    MinuteSecondsPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MaterialModule,

  ],
  providers: [
    CountryApiService,
    UserApiService,
    ProjectApiService,
    ProjectStatusApiService,
    RecipientApiService,
    ShipmentApiService,
    TokenizerService,
    CarrierTypeApiService,
    CarrierApiService,
    TransactionTypeApiService,
    AdminShipmentApiService,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi:true},
  ],
  bootstrap: [AppComponent],
  entryComponents: [EditRecipientComponent, EditCarrierComponent, EditClientComponent, EditProjectComponent,
                    EditShipmentComponent]
})
export class AppModule { }
