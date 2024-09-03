import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SpeakerCardComponent } from './components/speaker-card/speaker-card.component';
import { CounterComponent } from './components/counter/counter.component';
import {
  Dot,
  LocateFixed,
  Cable,
  CalendarDays,
  LucideAngularModule,
  X,
  Linkedin,
  MoveRight,
  PencilRuler,
  Blocks,
} from 'lucide-angular';
import { SectionTitleComponent } from './components/section-title/section-title.component';
import { AboutBulletComponent } from './components/about-bullet/about-bullet.component';
import { EventAlertComponent } from './components/event-alert/event-alert.component';
import { SchedhuleItemComponent } from './components/schedule-item/schedule-item.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    SpeakerCardComponent,
    CounterComponent,
    SectionTitleComponent,
    AboutBulletComponent,
    EventAlertComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SchedhuleItemComponent,
    LucideAngularModule.pick({
      MoveRight,
      Dot,
      Linkedin,
      X,
      Cable,
      CalendarDays,
      LocateFixed,
      PencilRuler,
      Blocks,
    }),
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    SpeakerCardComponent,
    CounterComponent,
    SectionTitleComponent,
    AboutBulletComponent,
    EventAlertComponent,
    SchedhuleItemComponent,
  ],
})
export class SharedModule {}
