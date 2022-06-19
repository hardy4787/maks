import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadMoreComponent } from "./components/load-more/load-more.component";
import { DurationPipe } from "./pipes/duration/duration.pipe";
import { OrderByPipe } from "./pipes/orderBy/order-by.pipe";
import { FilterPipe } from "./pipes/filter/filter.pipe";
import { CoursePlateBorderDirective } from "./directives/course-plate-border.directive";
import { AutocompleteComponent } from "./components/autocomplete/autocomplete.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../material/material.module";
import { IfAuthenticatedDirective } from './directives/if-authenticated.directive';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { DurationComponent } from './components/duration/duration.component';

const SHARED_ELEMENTS = [
  AutocompleteComponent,
  LoadMoreComponent,
  DatePickerComponent,
  DurationComponent,
  CoursePlateBorderDirective,
  DurationPipe,
  OrderByPipe,
  FilterPipe,
  IfAuthenticatedDirective,
]

@NgModule({
  declarations: [
    ...SHARED_ELEMENTS,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  exports: [
    ...SHARED_ELEMENTS,
  ]
})
export class SharedModule { }
