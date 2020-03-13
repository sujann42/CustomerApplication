import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {RouterModule} from '@angular/router';
import {LoginComponent} from './CustomerApp.Login.component';
import {LoginRoutes} from '../Routing/CustomerApp.LoginRouting';



@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(LoginRoutes)
  ],
  providers: [],
  bootstrap: [LoginComponent]
})
export class LoginModule { }
