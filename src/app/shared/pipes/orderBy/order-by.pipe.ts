import { Pipe, PipeTransform } from '@angular/core';
import { Course } from "../../../core/models/course.interface";

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(list: any[], value: string): Course[] {
    return list.sort((a, b) => a[value] > b[value] ? -1 : 1);
  }

}
