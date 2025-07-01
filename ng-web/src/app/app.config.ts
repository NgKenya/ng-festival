import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { provideRouter } from "@angular/router";
import { routes } from "./app.routes";
import {
	AlignLeft,
	CalendarDays,
	ExternalLink,
	Linkedin,
	LucideAngularModule,
	MoveRight,
	Network,
	PianoIcon,
	Spool,
	XIcon,
} from "lucide-angular";

export const AppConfig: ApplicationConfig = {
	providers: [
		// provideHttpClient(),
		provideRouter(routes),
		importProvidersFrom(
			LucideAngularModule.pick({
				AlignLeft,
				Linkedin,
				XIcon,
				MoveRight,
				ExternalLink,
				PianoIcon,
				Spool,
				Network,
				CalendarDays,
			}),
		),
	],
};
