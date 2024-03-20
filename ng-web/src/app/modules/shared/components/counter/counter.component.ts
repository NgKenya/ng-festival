import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, interval, map, takeUntil } from 'rxjs';

interface IDate {
  month:number,
  day:number,
  hour:number,
  minute:number,
  second:number
}
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent implements OnInit {
  officialDate: Date = new Date('July 6 2024');
  daysLeft: number = 0;
  daysLeftDisplay:IDate={
    month:0,
    day:0,
    hour:0,
    minute:0,
    second:0
  }
  progressBarWidth:number=0

  // private subscription: Subscription;

  ngOnInit(): void {
    this.getDateDifference();
    this.startTimer()
    
    
  }

  getDateDifference() {
    const now = new Date();
    const diffinDays = this.officialDate.getTime() - now.getTime();
    this.daysLeft = Math.ceil(diffinDays / (1000*60*60*24));
    this.progressBarWidth = Math.max(0, Math.floor(this.daysLeft / (this.officialDate.getTime() - new Date(2024, 4, 19).getTime()) * 100)); // Adjust based on your start date
  }

  startTimer() {
    interval(1000).pipe(
      takeUntil(new Observable(subscriber => {
        const checkInterval = setInterval(() => {
          if (this.isEventOver()) {
            subscriber.complete();
            clearInterval(checkInterval);
          }
        }, 1000);
      }))
    ).subscribe(() => {
      this.getDateDifference(); 
      const totalSeconds = this.daysLeft * 24 * 60 * 60;
    this.daysLeftDisplay = {
      month: Math.floor(this.daysLeft / 30),
      day: this.daysLeft , // Remaining days after calculating months
      hour: Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60)), // Hours left in the last day
      minute: Math.floor((totalSeconds % (60 * 60)) / 60), // Minutes left in the last hour
      second: totalSeconds % 60 // Seconds left in the last minute
    };

    });
  }

  isEventOver(){
    return new Date() >=this.officialDate;
  }
}
