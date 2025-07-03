import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { SpeakersComponent } from "./pages/speakers/speakers.component";
import { ScheduleComponent } from "./pages/schedule/schedule.component";

export const routes: Routes = [
	{
		path: "",
		component: HomeComponent,
	},
	{
		path: "speakers",
		component: SpeakersComponent,
	},
	{
		path: "schedule",
		component: ScheduleComponent,
	},
];
