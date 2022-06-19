import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { MaterialModule } from "../material/material.module";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { AppRouterModule } from "../router/router.module";

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    SharedModule,
    AppRouterModule
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
