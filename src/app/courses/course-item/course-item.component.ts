import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from "../../core/models/course.interface";

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CourseItemComponent implements OnInit {
  @Input() item: Course;
  @Output() courseDeleted = new EventEmitter<number>();
  @Output() courseEdited = new EventEmitter<number>();

  ngOnInit() {

  }

  onCourseEdit(): void {
    this.courseEdited.emit(this.item.id);
  }

  onCourseDelete(): void {
    this.courseDeleted.emit(this.item.id);
  }
}
