import { Component, OnInit } from '@angular/core';
import { Observable, interval, takeUntil } from 'rxjs';

interface IDate {
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
}
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent implements OnInit {
  officialDate: Date = new Date('May 6 2024');
  daysLeft: number = 0;
  daysLeftDisplay: IDate = {
    month: 0,
    day: 0,
    hour: 0,
    minute: 0,
    second: 0,
  };
  progressBarWidth: number = 0;

  // private subscription: Subscription;

  ngOnInit(): void {
    this.getDateDifference();
    this.startTimer();
  }

  getDateDifference() {
    const now = new Date();
    const diffinDays = this.officialDate.getTime() - now.getTime();
    this.daysLeft = Math.ceil(diffinDays);
  }
  startTimer() {
    interval(1000)
      .pipe(
        takeUntil(
          new Observable((subscriber) => {
            const checkInterval = setInterval(() => {
              if (this.isEventOver()) {
                subscriber.complete();
                clearInterval(checkInterval);
              }
            }, 1000);
          })
        )
      )
      .subscribe(() => {
        this.getDateDifference();
        // const totalSeconds = this.daysLeft;
        this.daysLeftDisplay = this.calculateRemainingTime(this.daysLeft);
      });
  }

  calculateRemainingTime(totalMilliseconds: number): {
    month: number;
    day: number;
    hour: number;
    minute: number;
    second: number;
  } {
    
    const millisecondsPerMonth = 1000 * 60 * 60 * 24 * 30;
    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    const millisecondsPerHour = 1000 * 60 * 60;
    const millisecondsPerMinute = 1000 * 60;

    // picked month
    const months = Math.floor(totalMilliseconds / millisecondsPerMonth);
    let remainingMilliseconds = totalMilliseconds % millisecondsPerMonth;
  


    const days = Math.floor(remainingMilliseconds / millisecondsPerDay);
    remainingMilliseconds %= millisecondsPerDay;


    const hours = Math.floor(remainingMilliseconds / millisecondsPerHour);
    remainingMilliseconds %= millisecondsPerHour;

    const minutes = Math.floor(remainingMilliseconds / millisecondsPerMinute);
    remainingMilliseconds %= millisecondsPerMinute;

    const seconds = Math.floor(remainingMilliseconds / 1000);

    return {
      month: months,
      day: days,
      hour: hours,
      minute: minutes,
      second: seconds,
    };
  }

  isEventOver() {
    return new Date() >= this.officialDate;
  }
}
