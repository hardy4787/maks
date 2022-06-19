import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from "../../core/models/course.interface";
import { CoursesService } from "../services/courses.service";

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.less']
})
export class CoursesListComponent {
  @Input() searchValue: string;
  @Input() courses: Course[];
  @Output() courseDeleted = new EventEmitter<number>();

  courseTrackBy(index: number, course: Course): number {
    return course.id;
  }

  courseDelete(id: number): void  {
    this.courseDeleted.emit(id);
  }
}
