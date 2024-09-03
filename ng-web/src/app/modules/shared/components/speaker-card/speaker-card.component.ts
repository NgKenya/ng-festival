import { Component, Input } from '@angular/core';
import { ISpeaker } from 'src/app/models/speaker.model';

@Component({
  selector: 'app-speaker-card',
  templateUrl: './speaker-card.component.html',
  styleUrls: ['./speaker-card.component.scss'],
})
export class SpeakerCardComponent {
  @Input() speaker!: ISpeaker;
}
