import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule, NgOptimizedImage } from "@angular/common";
// import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "../../shared/components/footer/footer.component";
import { SpeakerCardComponent } from "../../shared/components/speaker-card/speaker-card.component";
import { CounterComponent } from "../../shared/components/counter/counter.component";
// import {
//   Dot,
//   LocateFixed,
//   Cable,
//   CalendarDays,
//   LucideAngularModule,
//   X,
//   Linkedin,
//   MoveRight,
//   PencilRuler,
//   Blocks,
//   AlignLeft,
//   CheckCheck,
//   ExternalLink,
//   XIcon,
//   ArrowRight,
// } from 'lucide-angular';
import { SectionTitleComponent } from "./components/section-title/section-title.component";
import { AboutBulletComponent } from "./components/about-bullet/about-bullet.component";
import { EventAlertComponent } from "./components/event-alert/event-alert.component";
import { SchedhuleItemComponent } from "./components/schedule-item/schedule-item.component";

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		RouterModule,
		// SchedhuleItemComponent,
		NgOptimizedImage,
		// LucideAngularModule.pick({
		//   MoveRight,
		//   Dot,
		//   Linkedin,
		//   X,
		//   Cable,
		//   CalendarDays,
		//   LocateFixed,
		//   PencilRuler,
		//   Blocks,
		//   AlignLeft,
		//   CheckCheck,
		//   ExternalLink,
		//   XIcon,
		//   ArrowRight,
		// }),
	],
	exports: [
		// SchedhuleItemComponent,
	],
})
export class SharedModule {}
