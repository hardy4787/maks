import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "../login/login.component";
import { CourseEditorComponent } from "../courses/course-editor/course-editor.component";
import { CoursesComponent } from "../courses/courses.component";
import { PageNotFoundComponent } from "../core/page-not-found/page-not-found.component";
import { AuthGuardService } from "../core/services/authGuard/auth-guard.service";

const routes: Routes = [
  { path: 'courses', component: CoursesComponent, canActivate: [AuthGuardService]  },
  { path: 'courses/new', component: CourseEditorComponent },
  { path: 'courses/:id', component: CourseEditorComponent },
  { path: 'login', component: LoginComponent },
  { path: '',   redirectTo: '/courses', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
   exports: [
     RouterModule
   ]
})
export class AppRouterModule { }
