import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SpeakersComponent } from './components/speakers/speakers.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { SharedModule } from '../shared/shared.module';
import { LucideAngularModule, Play, MoveRight } from 'lucide-angular';

@NgModule({
  declarations: [
    HomeComponent,
    SpeakersComponent,
    ScheduleComponent,
    ContactUsComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    LucideAngularModule.pick({ Play, MoveRight }),
    NgOptimizedImage,
  ],
})
export class HomeModule {}
