import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-about-bullet',
    templateUrl: './about-bullet.component.html',
    styleUrl: './about-bullet.component.scss',
    standalone: false
})
export class AboutBulletComponent {
  @Input() description: {
    icon: string;
    desc1: string;
    desc2: string;
  } = {
    icon: 'move-right',
    desc1: 'Delve into core Angular concepts,',
    desc2:
      'From web fundamentals like the browser DOM API to advanced TypeScript techniques.',
  };
}
