import { Component, inject, OnInit } from '@angular/core';
import { SpeakerList } from 'src/app/const/data.const';
import { UtilService } from 'src/app/services/util/util.service';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.scss'],
})
export class SpeakersComponent implements OnInit {
  speakers = SpeakerList;
  utilService = inject(UtilService);

  ngOnInit(): void {
    this.speakers.forEach((speaker, index) => {
      this.utilService.getDimensions(speaker.imageUrl).then((dim) => {
        this.speakers[index].width = dim.width;
        this.speakers[index].height = dim.height;
      });
    });
  }
}
