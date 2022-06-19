import { Pipe, PipeTransform } from '@angular/core';
import { Course } from "../../../core/models/course.interface";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(courses: Course[], searchValue: string): Course[] {
    return searchValue ? courses.filter(value => value.title.includes(searchValue)) : courses;
  }

}
