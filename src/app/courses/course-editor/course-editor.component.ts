import { Component, OnInit } from '@angular/core';
import { Course } from "../../core/models/course.interface";
import { CoursesService } from "../services/courses.service";
import { ActivatedRoute } from "@angular/router";
import {filter} from "rxjs";

@Component({
  selector: 'app-course-editor',
  templateUrl: './course-editor.component.html',
  styleUrls: ['./course-editor.component.less']
})
export class CourseEditorComponent implements OnInit {
  private course: Course;
  private isEditMode: boolean;

  inputTitleValue: string;
  inputDescriptionValue: string;
  inputDateValue: Date;
  inputDurationValue: number;

  constructor(
    private coursesService: CoursesService,
    private activetedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activetedRoute.params.subscribe(({ id }) => {
      if (id) {
        this.course = this.coursesService.getCourseItem(id);
        this.isEditMode = true;
      }
    })
  }

  onCourseSave() {
    this.coursesService.createCourse(this.fillCourse());
  }

  private fillCourse(): Course {
    return {
      id: this.isEditMode ? this.course.id : this.coursesService.getLastCoursesId(),
      title: this.inputTitleValue,
      description: this.inputDescriptionValue,
      duration: this.inputDurationValue,
      creationDate: this.inputDateValue,
    }
  }

  private fillForm(course: Course): void {
    this.inputTitleValue = course.title;
    this.inputDescriptionValue = course.description;
    this.inputDurationValue = course.duration;
    this.inputDateValue = course.creationDate;
  }
}
