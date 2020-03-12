import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { MasterPageComponent } from './CustomerApp.Master.component';
import { HomeComponent } from './CustomerApp.component';
import {RouterModule} from '@angular/router';
import {MainRoutes} from '../Routing/CustomerApp.MainRouting';



@NgModule({
  declarations: [
    MasterPageComponent,
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
export class MainModule { }
