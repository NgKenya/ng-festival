import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-title',
  standalone: false,
  // imports: [],
  templateUrl: './section-title.component.html',
  styleUrl: './section-title.component.scss',
})
export class SectionTitleComponent {
  @Input() sectionName: string = 'NG Kenya';
}
