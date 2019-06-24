import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarrierComponent } from './carrier/carrier.component';
import { ClientComponent } from './client/client.component';
import { ProjectComponent } from './project/project.component';
import { RecipientComponent } from './recipient/recipient.component';
import { ShipmentComponent } from './shipment/shipment.component';
import { MenuComponent } from './shared/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    CarrierComponent,
    ClientComponent,
    ProjectComponent,
    RecipientComponent,
    ShipmentComponent,
    MenuComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
