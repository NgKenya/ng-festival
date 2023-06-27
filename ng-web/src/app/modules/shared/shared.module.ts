import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SpeakerCardComponent } from './components/speaker-card/speaker-card.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    SpeakerCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
    exports: [
        NavbarComponent,
        FooterComponent,
        SpeakerCardComponent
    ]
})
export class SharedModule { }
