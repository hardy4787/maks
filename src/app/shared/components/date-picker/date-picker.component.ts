import {Component, EventEmitter, Output} from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.less']
})
export class DatePickerComponent {
  @Output() dateChanged = new EventEmitter<Date>();

  date = new FormControl(new Date());

  onDateSave() {
    console.log(this.date.value);
    this.dateChanged.emit(this.date.value);
  }
}
