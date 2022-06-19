import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from "@angular/forms";
import { Course } from "../../../core/models/course.interface";
import { map, Observable, startWith } from "rxjs";
import { COURSES } from "../../../core/models/constants";

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.less']
})
export class AutocompleteComponent implements OnInit {
  @Output() searchedValue = new EventEmitter<string>();
  courses: Course[];
  filteredCourses: Observable<Course[]>;
  searchValue: string;
  myControl = new FormControl();

  ngOnInit() {
    this.courses = COURSES;
    this.filteredCourses = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this.filterCourse(value))
    );
  }

  filterCourse(course: string): Course[] {
    const filterValue = course;

    return this.courses.filter(option => option.title.toLowerCase().includes(filterValue));
  }

  autocompleteLog (searchValue: string): void {
    this.searchValue = searchValue;
    this.searchedValue.emit(this.searchValue);
  }
}
