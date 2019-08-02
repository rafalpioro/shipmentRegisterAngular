import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minuteSeconds'
})
export class MinuteSecondsPipe implements PipeTransform {

  transform(value: number): string {
    this.startTimer(value);
    const minutes: number = Math.floor(value / 60);
    return minutes.toString().padStart(2, '0') + ':' +
      (value - minutes * 60).toString().padStart(2, '0');
  }

  startTimer( timeLeft): number {
    return setInterval(() => {
      if(timeLeft > 0) {
        timeLeft--;
      } else {
        0;
      }
    },1000)
  }

}
