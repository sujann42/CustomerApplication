import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { CustomerComponent } from './CustomerApp.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [CustomerComponent]
})
export class CustomerAppModule { }
