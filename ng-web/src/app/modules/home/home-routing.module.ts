import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { SpeakersComponent } from "./components/speakers/speakers.component";
import { ScheduleComponent } from "./components/schedule/schedule.component";
import { ContactUsComponent } from "./components/contact-us/contact-us.component";

const routes: Routes = [
	{
		path: "",
		redirectTo: "home",
		pathMatch: "full",
	},
	{
		path: "home",
		component: HomeComponent,
	},
	{
		path: "speakers",
		component: SpeakersComponent,
	},
	// {
	//   path: 'schedule',
	//   component: ScheduleComponent,
	// },
	{
		path: "contact-us",
		component: ContactUsComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class HomeRoutingModule {}
