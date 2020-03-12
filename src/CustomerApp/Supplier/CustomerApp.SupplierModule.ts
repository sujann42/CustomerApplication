import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { SupplierComponent} from '../Supplier/CustomerApp.Supplier.component';
import {RouterModule} from '@angular/router';
import {SupplierRoutes} from '../Routing/CustomerApp.SupplierRouting';



@NgModule({
  declarations: [
    SupplierComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(SupplierRoutes)
  ],
  providers: [],
  bootstrap: [SupplierComponent]
})
export class SupplierModule { }
