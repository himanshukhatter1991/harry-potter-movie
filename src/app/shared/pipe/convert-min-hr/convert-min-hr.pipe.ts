import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertMinHr',
  standalone: true
})
export class ConvertMinHrPipe implements PipeTransform {

  transform(value: string): string {
    const time = parseInt(value);
    if (isNaN(time) || time < 0) {
      return 'Invalid Input';
    }

    const totalHours = Math.floor(time / 60);
    const pendingMinutes = time % 60;

    if (totalHours === 0)
      return pendingMinutes + 'min';
    else if (pendingMinutes === 0)
      return totalHours + 'h';
    else
      return `${totalHours}h ${pendingMinutes}min`;

  }

}
