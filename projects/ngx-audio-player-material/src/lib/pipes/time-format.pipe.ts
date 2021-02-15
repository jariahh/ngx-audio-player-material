import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFormat'
})
export class TimeFormatPipe implements PipeTransform {

  transform(seconds: number): string {
    if (Number.isNaN(seconds)) { return null; }
    return new Date(seconds * 1000).toISOString().substr(11, 8);
  }

}
