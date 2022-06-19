import { Injectable } from '@angular/core';
import { Course } from "../../core/models/course.interface";
import { COURSES } from "../../core/models/constants";

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private courses: Course[];

  constructor() { }

  getList(): Course[] {
    this.courses = COURSES;
    return this.courses;
  }

  createCourse(course: Course): Course[] {
    this.courses.push(course);

    return this.courses;
  }

  getCourseItem(id: number): Course {
    return this.courses.find(course => course?.id === id) as Course;
  }

  getLastCoursesId(): number {
    return this.courses.length;
  }

  removeCourseItem(id: number): Course[] {
    this.courses = this.courses.filter((course) => course.id !== id);

    return this.courses;
  }

  updateCourseItem(id: number): Course[] {
    return this.courses;
  }
}
