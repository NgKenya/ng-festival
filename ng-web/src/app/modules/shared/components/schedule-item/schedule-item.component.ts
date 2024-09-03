import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { LucideAngularComponent, LucideAngularModule } from 'lucide-angular';
import { ITalk } from 'src/app/models/speaker.model';
import { UtilService } from 'src/app/services/util/util.service';

@Component({
  selector: 'app-schedule-item',
  standalone: true,
  imports: [LucideAngularModule, CommonModule],
  templateUrl: './schedule-item.component.html',
  styleUrl: './schedule-item.component.scss',
})
export class SchedhuleItemComponent {
  @Input() talk!: ITalk;

  utilService = inject(UtilService);
}
