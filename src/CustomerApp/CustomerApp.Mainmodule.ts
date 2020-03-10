import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { MasterPageComponent } from './Home/CustomerApp.Master.component';
import { HomeComponent } from './Home/CustomerApp.component';
import { CustomerComponent } from './Customer/CustomerApp.Customer.component';
import { SupplierComponent} from './Supplier/CustomerApp.Supplier.component';
import {RouterModule} from '@angular/router';
import {MainRoutes} from './Routing/CustomerApp.MainRouteing';



@NgModule({
  declarations: [
    MasterPageComponent,
    CustomerComponent,
    SupplierComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(MainRoutes)
  ],
  providers: [],
  bootstrap: [MasterPageComponent]
})
export class Mainmodule { }
