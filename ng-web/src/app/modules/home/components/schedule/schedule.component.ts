import { Component, OnInit } from '@angular/core';
import { TalkList } from 'src/app/const/data.const';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent implements OnInit {
  talkList = TalkList;
  activeTime = new Date();

  ngOnInit(): void {
    this.reshuffleTalks();

    setInterval(() => {
      this.activeTime = new Date();
      this.reshuffleTalks();
    }, 900000);
  }

  reshuffleTalks() {
    const now = this.activeTime.toISOString().slice(0, 19);
    console.log(now);

    const newTalks = this.talkList.filter((x) => {
      let xstartTime = new Date(x.startTime);
      return xstartTime > this.activeTime;
    });

    const doneTalks = this.talkList.filter((x) => {
      let xstartTime = new Date(x.startTime);
      return xstartTime < this.activeTime;
    });

    doneTalks.forEach((talk) => (talk.isDone = true));

    this.talkList = [...newTalks, ...doneTalks];

    // 2024-09-07T08:00:00
  }
}
