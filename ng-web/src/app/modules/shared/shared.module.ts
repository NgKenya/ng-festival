import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SpeakerCardComponent } from './components/speaker-card/speaker-card.component';
import { CounterComponent } from './components/counter/counter.component';
import {
  Dot,
  LucideAngularComponent,
  LucideAngularModule,
  X,
  Linkedin,
  MoveRight,
} from 'lucide-angular';
import { SectionTitleComponent } from './components/section-title/section-title.component';
import { AboutBulletComponent } from './components/about-bullet/about-bullet.component';
import { EventAlertComponent } from './components/event-alert/event-alert.component';

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
    LucideAngularModule.pick({ MoveRight, Dot, Linkedin, X }),
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    SpeakerCardComponent,
    CounterComponent,
    SectionTitleComponent,
    AboutBulletComponent,
    EventAlertComponent,
  ],
})
export class SharedModule {}
