import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SpeakersComponent } from './components/speakers/speakers.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    HomeComponent,
    SpeakersComponent,
    ScheduleComponent,
    ContactUsComponent
  ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        SharedModule
    ]
})
export class HomeModule { }
