import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(duration: number): string {
    const oneHour = 60;
    const hours = Math.trunc(duration/oneHour);
    const minutes = duration%oneHour;

    if (duration > oneHour) {
      return `${hours}h ${minutes}min`;
    }

    return `${duration}min`;
  }

}
