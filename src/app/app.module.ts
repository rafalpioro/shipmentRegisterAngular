import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule }    from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {
  MatButtonModule, MatDialogModule,
  MatFormFieldModule,
  MatInputModule, MatListModule, MatOptionModule, MatPaginatorModule,
  MatProgressSpinnerModule, MatSelectModule, MatSortModule,
  MatTableModule
} from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatCardModule} from '@angular/material/card';


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
import { UserComponent } from './admin/user/user.component';
import {UserApiService} from "./admin/user/user-api.service";
import { WelcomeComponent } from './shared/welcome/welcome.component';
import { AllShipmentsComponent } from './shipment/all-shipments/all-shipments.component';
import {ShipmentApiService} from "./shipment/shipment-api.service";
import { AllRecipientsComponent } from './recipient/all-recipients/all-recipients.component';
import {RecipientApiService} from "./recipient/recipient-api.service";
import { EditRecipientComponent } from './recipient/edit-recipient/edit-recipient.component';
import { CountryComponent } from './admin/country/country.component';
import {CountryApiService} from "./admin/country/country-api.service";
import { UniqueRecipientValidatorDirective } from './recipient/unique-recipient-validator.directive';
import { AddRecipientComponent } from './recipient/add-recipient/add-recipient.component';
import { AddCarrierComponent } from './carrier/add-carrier/add-carrier.component';
import { AllCarriersComponent } from './carrier/all-carriers/all-carriers.component';
import { EditCarrierComponent } from './carrier/edit-carrier/edit-carrier.component';
import { CarrierTypeComponent } from './admin/carrier-type/carrier-type.component';
import {CarrierTypeApiService} from "./admin/carrier-type/carrier-type-api.service";
import {CarrierApiService} from "./carrier/carrier-api.service";
import {UniqueCarrierValidatorDirective} from "./carrier/unique-carrier-validator.directive";


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
    UserComponent,
    WelcomeComponent,
    AllShipmentsComponent,
    AllRecipientsComponent,
    EditRecipientComponent,
    CountryComponent,
    UniqueRecipientValidatorDirective,
    UniqueCarrierValidatorDirective,
    AddRecipientComponent,
    AddCarrierComponent,
    AllCarriersComponent,
    EditCarrierComponent,
    CarrierTypeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    FlexLayoutModule,
    MatCardModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatTableModule,
    MatDialogModule,
    MatPaginatorModule,
    MatListModule,
    MatSortModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
  ],
  providers: [
    CountryApiService,
    UserApiService,
    RecipientApiService,
    ShipmentApiService,
    TokenizerService,
    CarrierTypeApiService,
    CarrierApiService,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi:true},
  ],
  bootstrap: [AppComponent],
  entryComponents: [EditRecipientComponent, EditCarrierComponent]
})
export class AppModule { }
