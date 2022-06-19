import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from "./courses.component";
import { CourseItemComponent } from "./course-item/course-item.component";
import { CoursesListComponent } from "./courses-list/courses-list.component";
import { CourseEditorComponent } from "./course-editor/course-editor.component";
import { AuthorsComponent } from "./authors/authors.component";
import { MaterialModule } from "../material/material.module";
import { SharedModule } from "../shared/shared.module";
import { AppRouterModule } from "../router/router.module";
import { FormsModule } from "@angular/forms";
import { HeaderBannerComponent } from "../core/header/header-banner/header-banner.component";

const COURSES_COMPONENTS = [
  CoursesComponent,
  CourseItemComponent,
  CoursesListComponent,
  CourseEditorComponent,
  AuthorsComponent,
  HeaderBannerComponent,
]


@NgModule({
  declarations: [
    ...COURSES_COMPONENTS
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    AppRouterModule,
    FormsModule,
  ],
  exports: [
    ...COURSES_COMPONENTS
  ]
})
export class CoursesModule { }
