import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ReactiveFormsModule, FormsModule }    from '@angular/forms';

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
import {EditBranchComponent} from "./branch/edit-branch/edit-branch.component";
import {AddBranchComponent} from "./branch/add-branch/add-branch.component";
import {AddCarrierTypeComponent} from "./carrier-type/add-carrier-type/add-carrier-type.component";
import {EditCarrierTypeComponent} from "./carrier-type/edit-carrier-type/edit-carrier-type.component";
import {EditCountryComponent} from "./country/edit-country/edit-country.component";
import {AddCountryComponent} from "./country/add-country/add-country.component";
import {AddIncotermComponent} from "./incoterms/add-incoterm/add-incoterm.component";
import {EditIncotermComponent} from "./incoterms/edit-incoterm/edit-incoterm.component";
import {EditUserComponent} from "./user/edit-user/edit-user.component";
import {AddUserComponent} from "./user/add-user/add-user.component";
import {EditProjectStatusComponent} from "./project-status/edit-project-status/edit-project-status.component";
import {AddProjectStatusComponent} from "./project-status/add-project-status/add-project-status.component";
import {UniqueCarrierTypeValidatorDirective} from "./carrier-type/unique-carrier-type-validator.directive";
import {UniqueBranchValidatorDirective} from "./branch/unique-branch-validator.directive";
import {UniqueCountryValidatorDirective} from "./country/unique-country-validator.directive";
import {UniqueIncotermValidatorDirective} from "./incoterms/unique-incoterm-validator.directive";
import {UniqueUserValidatorDirective} from "./user/unique-user-validator.directive";
import {UniqueProjectStatusValidatorDirective} from "./project-status/unique-project-status-validator.directive";



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
    UserComponent,
    EditBranchComponent,
    AddBranchComponent,
    AddCarrierTypeComponent,
    EditCarrierTypeComponent,
    EditCountryComponent,
    AddCountryComponent,
    AddIncotermComponent,
    EditIncotermComponent,
    EditUserComponent,
    AddUserComponent,
    EditProjectStatusComponent,
    AddProjectStatusComponent,
    UniqueBranchValidatorDirective,
    UniqueCarrierTypeValidatorDirective,
    UniqueCountryValidatorDirective,
    UniqueIncotermValidatorDirective,
    UniqueUserValidatorDirective,
    UniqueProjectStatusValidatorDirective,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    NgxChartsModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  entryComponents: [EditBranchComponent, AddBranchComponent, AddCarrierTypeComponent, EditCarrierTypeComponent,
    EditCountryComponent, AddCountryComponent, AddIncotermComponent, EditIncotermComponent,
    EditUserComponent, AddUserComponent, EditProjectStatusComponent, AddProjectStatusComponent]
})
export class AdminModule { }
