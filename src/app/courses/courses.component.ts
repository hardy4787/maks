import { Component, Input, OnInit } from '@angular/core';
import { CoursesService } from "./services/courses.service";
import { Course } from "../core/models/course.interface";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.less']
})
export class CoursesComponent implements OnInit {
  @Input() courses: Course[];

  searchValue: string;

  constructor(
    private coursesService: CoursesService
  ) { }

  ngOnInit() {
    this.courses = this.coursesService.getList();
  }

  onFilterCourses(searchValue: string): void {
    this.searchValue = searchValue;
  }

  onDeleteCourse(id: number): void {
    if(confirm("Do you realy want to delete?")) {
      this.courses = this.coursesService.removeCourseItem(id);
    }
  }

  onUpdateCourse(id: number): void {
    this.courses = this.coursesService.updateCourseItem(id);
  }
}
