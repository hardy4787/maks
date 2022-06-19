import { Component, OnInit } from '@angular/core';
import { Course } from '../../core/models/course.interface';
import { CoursesService } from '../services/courses.service';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-course-editor',
  templateUrl: './course-editor.component.html',
  styleUrls: ['./course-editor.component.less'],
})
export class CourseEditorComponent implements OnInit {
  private isEditMode: boolean;
  private course: Course;

  inputTitleValue: string;
  inputDescriptionValue: string;
  inputDateValue: Date;
  inputDurationValue: number;

  constructor(
    private coursesService: CoursesService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(({ id }) => {
      if (id) {
        this.isEditMode = true;
        this.course = this.coursesService.getCourseItem(Number(id));
        this.fillForm();
      }
    });
  }

  onCourseSave = () =>
    this.isEditMode
      ? this.coursesService.updateCourseItem(this.fillCourse(this.course.id))
      : this.coursesService.createCourse(this.fillCourse());

  private fillCourse(id?: number): Course {
    return {
      id: id ?? this.coursesService.getLastCoursesId(),
      title: this.inputTitleValue,
      description: this.inputDescriptionValue,
      duration: this.inputDurationValue,
      creationDate: this.inputDateValue,
    };
  }

  private fillForm(): void {
    this.inputTitleValue = this.course.title;
    this.inputDescriptionValue = this.course.description;
    this.inputDurationValue = this.course.duration;
    this.inputDateValue = this.course.creationDate;
  }
}
