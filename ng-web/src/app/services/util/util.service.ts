import { Injectable } from '@angular/core';
import { ticketUrl } from 'src/app/const/data.const';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  constructor() {}

  openNewPage(link: string) {
    window.open(link, '_blank');
  }

  getTickets() {
    window.open(ticketUrl, '_blank');
  }

  getMinutesDifference = (startTime: Date, endTime: Date) => {
    const start = startTime;
    const end = endTime;

    let diff = end.getTime() - start.getTime();

    return Math.floor(diff / (1000 * 60));
  };
}
