import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { provideRouter } from "@angular/router";
import { routes } from "./app.routes";
import {
	AlignLeft,
	Blocks,
	CalendarDays,
	CheckCheck,
	CheckCheckIcon,
	ExternalLink,
	Linkedin,
	LucideAngularModule,
	MoveRight,
	Network,
	PianoIcon,
	Spool,
	XIcon,
} from "lucide-angular";
import { provideHttpClient, withFetch } from "@angular/common/http";

export const AppConfig: ApplicationConfig = {
	providers: [
		provideHttpClient(withFetch()),
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
				CheckCheck,
				Blocks,
			}),
		),
	],
};
