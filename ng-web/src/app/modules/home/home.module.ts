import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule, NgOptimizedImage } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./components/home/home.component";
import { SpeakersComponent } from "../../pages/speakers/speakers.component";
import { ScheduleComponent } from "../../pages/schedule/schedule.component";
import { ContactUsComponent } from "./components/contact-us/contact-us.component";
import { SharedModule } from "../shared/shared.module";
// import {
// 	LucideAngularModule,
// 	Play,
// 	MoveRight,
// 	Menu,
// 	AlignLeft,
// 	ChevronRight,
// 	PianoIcon,
// } from "lucide-angular";
import { SchedhuleItemComponent } from "../shared/components/schedule-item/schedule-item.component";

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
		// LucideAngularModule.pick({
		// 	Play,
		// 	MoveRight,
		// 	Menu,
		// 	AlignLeft,
		// 	ChevronRight,
		// 	PianoIcon,
		// }),
		NgOptimizedImage,
		// SchedhuleItemComponent,
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {}
