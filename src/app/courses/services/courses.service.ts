import { Injectable } from '@angular/core';
import { Course } from '../../core/models/course.interface';
import { COURSES } from '../../core/models/constants';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private courses: Course[] = COURSES;

  constructor() {}

  getList(): Course[] {
    return this.courses;
  }

  createCourse(course: Course): Course[] {
    this.courses.push(course);

    return this.courses;
  }

  getCourseItem(id: number): Course {
    return this.courses.find((course) => course?.id === id) as Course;
  }

  getLastCoursesId(): number {
    return this.courses.length + 1;
  }

  removeCourseItem(id: number): Course[] {
    this.courses = this.courses.filter((course) => course.id !== id);

    return this.courses;
  }

  updateCourseItem(course: Course): Course[] {
    let updateItem = this.getCourseItem(course.id);
    let index = this.courses.indexOf(updateItem);
    this.courses[index] = course;
    return this.courses;
  }
}
