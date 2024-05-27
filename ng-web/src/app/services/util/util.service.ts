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
}
