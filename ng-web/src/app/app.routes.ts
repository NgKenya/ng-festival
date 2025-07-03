import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { SpeakersComponent } from "./pages/speakers/speakers.component";

export const routes: Routes = [
	{
		path: "",
		component: HomeComponent,
	},
	{
		path: "speakers",
		component: SpeakersComponent,
	},
];
