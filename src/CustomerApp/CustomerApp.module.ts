import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { CustomerAppMasterComponent } from './CustomerAppMaster.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    CustomerAppMasterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [CustomerAppMasterComponent]
})
export class CustomerAppModule { }
