import { Component } from '@angular/core';
import { TalkList } from 'src/app/const/data.const';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent {
  talkList = TalkList;
}
