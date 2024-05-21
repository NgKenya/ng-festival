import { Component } from '@angular/core';
import { IDescription } from 'src/app/models/description.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  isVisible: boolean = false;
  whatToExpect: IDescription[] = [
    {
      icon: 'move-right',
      desc1: 'Delve into core Angular concepts,',
      desc2:
        'From web fundamentals like the browser DOM API to advanced TypeScript techniques.',
    },
    {
      icon: 'move-right',
      desc1: 'Delve into core Angular concepts,',
      desc2:
        'From web fundamentals like the browser DOM API to advanced TypeScript techniques.',
    },
    {
      icon: 'move-right',
      desc1: 'Delve into core Angular concepts,',
      desc2:
        'From web fundamentals like the browser DOM API to advanced TypeScript techniques.',
    },
  ];
}
