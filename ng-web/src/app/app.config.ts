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
	GitBranch,
	GraduationCap,
	Layers,
	Linkedin,
	LucideAngularModule,
	MapPin,
	MoveRight,
	Network,
	PianoIcon,
	Sparkles,
	Spool,
	Ticket,
	TrendingUp,
	Users,
	Wrench,
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
				GitBranch,
				GraduationCap,
				Layers,
				MapPin,
				Sparkles,
				Ticket,
				TrendingUp,
				Users,
				Wrench,
			}),
		),
	],
};
