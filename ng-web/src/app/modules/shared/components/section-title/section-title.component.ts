import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-section-title',
  standalone: false,
  // imports: [],
  templateUrl: './section-title.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './section-title.component.scss',
})
export class SectionTitleComponent {
  @Input() sectionName: string = 'NG Kenya';
}
