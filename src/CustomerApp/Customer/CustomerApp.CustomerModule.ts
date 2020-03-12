import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { CustomerComponent } from '../Customer/CustomerApp.Customer.component';
import {RouterModule} from '@angular/router';
import {CustomerRoutes} from '../Routing/CustomerApp.CustomerRouting';


@NgModule({
  declarations: [
    CustomerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(CustomerRoutes)
  ],
  providers: [],
  bootstrap: [CustomerComponent]
})
export class CustomerModule {

}
