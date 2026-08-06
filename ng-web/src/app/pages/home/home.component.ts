import { Component, inject } from "@angular/core";
import { CounterComponent } from "../../shared/components/counter/counter.component";
import { LucideAngularModule } from "lucide-angular";
import { eventStats, ngKenya2025Photos } from "src/app/const/data.const";
import { UtilService } from "src/app/shared/services/util/util.service";

@Component({
	selector: "ng-ke-home",
	imports: [CounterComponent, LucideAngularModule],
	standalone: true,
	templateUrl: "./home.component.html",
	styleUrl: "./home.component.scss",
})
export class HomeComponent {
	private utilService = inject(UtilService);

	showVideo = false;
	stats = eventStats;

	/**
	 * The three pillars that power the NG-ine Room: Angular synergized with
	 * cutting-edge tools, intelligent platforms, and agile workflows.
	 */
	pillars: { icon: string; title: string; description: string }[] = [
		{
			icon: "wrench",
			title: "Cutting-edge Tools",
			description:
				"Signals, standalone APIs, zoneless change detection and the modern Angular toolchain that make apps faster to build and blazing fast to run.",
		},
		{
			icon: "layers",
			title: "Intelligent Platforms",
			description:
				"AI-assisted development, smart integrations and intelligent services that supercharge how we design, code and ship Angular experiences.",
		},
		{
			icon: "git-branch",
			title: "Agile Workflows",
			description:
				"CI/CD, testing and collaborative practices that keep teams in sync and turn great ideas into production reality with confidence.",
		},
	];

	/**
	 * Value propositions surfaced in the "Why attend" section.
	 */
	whyAttend: { icon: string; title: string; description: string }[] = [
		{
			icon: "graduation-cap",
			title: "Learn from the best",
			description:
				"Deep-dive talks and hands-on workshops led by Angular experts and community leaders.",
		},
		{
			icon: "users",
			title: "Grow your network",
			description:
				"Connect with a vibrant community of developers, GDEs and industry partners across Africa.",
		},
		{
			icon: "trending-up",
			title: "Level up your craft",
			description:
				"Walk away with practical patterns, tools and workflows you can apply to your projects immediately.",
		},
	];

	openVideo() {
		this.showVideo = true;
	}

	closeVideo() {
		this.showVideo = false;
	}

	getTickets() {
		this.utilService.getTickets();
	}

	viewPastPhotos() {
		this.utilService.openNewPage(ngKenya2025Photos);
	}
}
