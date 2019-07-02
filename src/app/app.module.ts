import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ReactiveFormsModule }    from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
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
    UserComponent

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
    MatCardModule
  ],
  providers: [
    UserApiService,
    TokenizerService,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi:true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
