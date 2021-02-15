import {Pipe, PipeTransform} from '@angular/core';

function pad(n: string, width: number): string {
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
}

@Pipe({
  name: 'ticksTimeFormat'
})
export class TicksTimeFormatPipe implements PipeTransform {

  transform(ticksInSecs: number): string {
    const ticks = ticksInSecs;
    const hh = Math.round((ticks / (60 * 60 * 10000000)) % 24);
    const mm = Math.round((ticks / (60 * 10000000)) % 60);
    const ss = ticks / (10000000) % 60;
    return `${pad(hh.toString(), 2)}:${pad(mm.toString(), 2)}:${pad(ss.toString(), 2)}`;
  }

}
