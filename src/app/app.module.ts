import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CoreModule } from "./core/core.module";
import { MaterialModule } from "./material/material.module";
import { LoginModule } from "./login/login.module";
import { SharedModule } from "./shared/shared.module";
import { AppRouterModule } from "./router/router.module";
import { CoursesModule } from "./courses/courses.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    CoreModule,
    LoginModule,
    SharedModule,
    AppRouterModule,
    CoursesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
