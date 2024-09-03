import { Component } from '@angular/core';
import { SpeakerList } from 'src/app/const/data.const';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.scss'],
})
export class SpeakersComponent {
  speakers = SpeakerList;
}
