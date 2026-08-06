import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { provideRouter } from "@angular/router";
import { routes } from "./app.routes";
import {
	AlignLeft,
	Blocks,
	Bot,
	CalendarDays,
	CheckCheck,
	CheckCheckIcon,
	Cpu,
	ExternalLink,
	Linkedin,
	LucideAngularModule,
	MapPin,
	MoveRight,
	Network,
	PianoIcon,
	Rocket,
	Sparkles,
	Spool,
	Ticket,
	Users,
	Workflow,
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
				Bot,
				Cpu,
				MapPin,
				Rocket,
				Sparkles,
				Ticket,
				Users,
				Workflow,
			}),
		),
	],
};
