import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { SharedModule } from "../shared/shared.module";
import { FormsModule } from "@angular/forms";
import { AppRouterModule } from "../router/router.module";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const CORE_ELEMENTS = [
  HeaderComponent,
  FooterComponent,
]

@NgModule({
  declarations: [
    ...CORE_ELEMENTS,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRouterModule
  ],
  exports: [
    ...CORE_ELEMENTS,
    FormsModule
  ]
})
export class CoreModule { }
