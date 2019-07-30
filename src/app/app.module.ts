import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
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
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTabsModule} from '@angular/material/tabs';
import {MatMenuModule} from '@angular/material/menu';

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
import { AddClientComponent } from './client/add-client/add-client.component';
import { AllClientsComponent } from './client/all-clients/all-clients.component';
import { EditClientComponent } from './client/edit-client/edit-client.component';
import { UniqueClientValidatorDirective } from './client/unique-client-validator.directive';
import { ProjectStatusComponent } from './admin/project-status/project-status.component';
import { AddProjectComponent } from './project/add-project/add-project.component';
import { AllProjectsComponent } from './project/all-projects/all-projects.component';
import { EditProjectComponent } from './project/edit-project/edit-project.component';
import { UniqueProjectValidatorDirective } from './project/unique-project-validator.directive';
import {ProjectApiService} from "./project/project-api.service";
import {ProjectStatusApiService} from "./admin/project-status/project-status-api.service";
import { AddShipmentComponent } from './shipment/add-shipment/add-shipment.component';
import { EditShipmentComponent } from './shipment/edit-shipment/edit-shipment.component';
import { TransactionTypeComponent } from './admin/transaction-type/transaction-type.component';
import {TransactionTypeApiService} from "./admin/transaction-type/transaction-type-api.service";
import { BranchComponent } from './admin/branch/branch.component';
import { ShipmentStatusComponent } from './admin/shipment-status/shipment-status.component';
import { MyShipmentsComponent } from './shipment/all-shipments/my-shipments/my-shipments.component';
import {AdminShipmentApiService} from "./admin/deactivated-shipment/admin-shipment-api.service";
import {DeactivatedShipmentComponent} from "./admin/deactivated-shipment/deactivated-shipment.component";
import { IncotermsComponent } from './admin/incoterms/incoterms.component';
import { EditBranchComponent } from './admin/branch/edit-branch/edit-branch.component';
import {AddBranchComponent} from "./admin/branch/add-branch/add-branch.component";
import { UniqueBranchValidatorDirective } from './admin/branch/unique-branch-validator.directive';
import { UniqueCarrierTypeValidatorDirective } from './admin/carrier-type/unique-carrier-type-validator.directive';
import { EditCarrierTypeComponent } from './admin/carrier-type/edit-carrier-type/edit-carrier-type.component';
import { AddCarrierTypeComponent } from './admin/carrier-type/add-carrier-type/add-carrier-type.component';
import { UniqueCountryValidatorDirective } from './admin/country/unique-country-validator.directive';
import { AddCountryComponent } from './admin/country/add-country/add-country.component';
import { EditCountryComponent } from './admin/country/edit-country/edit-country.component';
import { UniqueIncotermValidatorDirective } from './admin/incoterms/unique-incoterm-validator.directive';
import { AddIncotermComponent } from './admin/incoterms/add-incoterm/add-incoterm.component';
import { EditIncotermComponent } from './admin/incoterms/edit-incoterm/edit-incoterm.component';
import { RoleComponent } from './admin/role/role.component';
import { UniqueUserValidatorDirective } from './admin/user/unique-user-validator.directive';
import { AddUserComponent } from './admin/user/add-user/add-user.component';
import { EditUserComponent } from './admin/user/edit-user/edit-user.component';
import { AddProjectStatusComponent } from './admin/project-status/add-project-status/add-project-status.component';
import { EditProjectStatusComponent } from './admin/project-status/edit-project-status/edit-project-status.component';
import { UniqueProjectStatusValidatorDirective } from './admin/project-status/unique-project-status-validator.directive';



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
    CarrierTypeComponent,
    AddClientComponent,
    AllClientsComponent,
    EditClientComponent,
    UniqueClientValidatorDirective,
    ProjectStatusComponent,
    AddProjectComponent,
    AllProjectsComponent,
    EditProjectComponent,
    UniqueProjectValidatorDirective,
    AddShipmentComponent,
    EditShipmentComponent,
    TransactionTypeComponent,
    BranchComponent,
    ShipmentStatusComponent,
    MyShipmentsComponent,
    DeactivatedShipmentComponent,
    IncotermsComponent,
    EditBranchComponent,
    AddBranchComponent,
    UniqueBranchValidatorDirective,
    UniqueCarrierTypeValidatorDirective,
    EditCarrierTypeComponent,
    AddCarrierTypeComponent,
    UniqueCountryValidatorDirective,
    AddCountryComponent,
    EditCountryComponent,
    UniqueIncotermValidatorDirective,
    AddIncotermComponent,
    EditIncotermComponent,
    RoleComponent,
    UniqueUserValidatorDirective,
    AddUserComponent,
    EditUserComponent,
    AddProjectStatusComponent,
    EditProjectStatusComponent,
    UniqueProjectStatusValidatorDirective


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
    MatDatepickerModule,
    MatNativeDateModule,
    MatRippleModule,
    MatCheckboxModule,
    MatTabsModule,
    MatMenuModule
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
                    EditShipmentComponent, EditBranchComponent, AddBranchComponent, AddCarrierTypeComponent, EditCarrierTypeComponent,
                    EditCountryComponent, AddCountryComponent, AddIncotermComponent, EditIncotermComponent,
                    EditUserComponent, AddUserComponent, EditProjectStatusComponent, AddProjectStatusComponent]
})
export class AppModule { }
