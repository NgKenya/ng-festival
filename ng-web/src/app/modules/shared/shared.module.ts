import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SpeakerCardComponent } from './components/speaker-card/speaker-card.component';
import { CounterComponent } from './components/counter/counter.component';
import { LucideAngularComponent, LucideAngularModule, LucideComponent, MoveRight } from 'lucide-angular';




@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    SpeakerCardComponent,
    CounterComponent,

  
  ],
  imports: [
    CommonModule,
    RouterModule,
    LucideAngularModule.pick({MoveRight})
  ],
    exports: [
        NavbarComponent,
        FooterComponent,
        SpeakerCardComponent,
        CounterComponent
    ]
})
export class SharedModule { }
