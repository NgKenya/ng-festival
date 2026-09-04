import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { SpeakersComponent } from "./pages/speakers/speakers.component";
import { ScheduleComponent } from "./pages/schedule/schedule.component";
import { PastEventsComponent } from "./pages/past-events/past-events.component";
import { ArchiveYearComponent } from "./pages/archive/archive-year.component";

export const routes: Routes = [
	{
		path: "",
		component: HomeComponent,
	},
	{
		path: "past-events",
		component: PastEventsComponent,
	},
	{
		path: "archive/:year",
		component: ArchiveYearComponent,
	},
	{
		path: "archive/:year/speakers",
		component: SpeakersComponent,
	},
	{
		path: "archive/:year/schedule",
		component: ScheduleComponent,
	},
	{
		path: "speakers",
		redirectTo: "archive/2026/speakers",
		pathMatch: "full",
	},
	{
		path: "schedule",
		redirectTo: "archive/2026/schedule",
		pathMatch: "full",
	},
];
