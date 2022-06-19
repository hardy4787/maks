import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-duration',
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.less']
})
export class DurationComponent  {
  @Output() durationChanged = new EventEmitter<number>();
  inputDurationValue: number;

  changeInputValue(inputValue: number): void {
    this.inputDurationValue = inputValue;
    this.durationChanged.emit(this.inputDurationValue);
  }
}
