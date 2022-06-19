import { Component, Input, OnInit } from '@angular/core';
import { Course } from "./core/models/course.interface";
import { CoursesService } from "./courses/services/courses.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  @Input() isLoggedIn: boolean;

  onAuthorised(isLogin: boolean): void {
    this.isLoggedIn = isLogin;
  }
}
