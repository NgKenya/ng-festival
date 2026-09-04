import {
	ChangeDetectionStrategy,
	Component,
	computed,
	inject,
} from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from "@angular/router";
import { filter, map, startWith } from "rxjs";
import { ngKenyaShopUrl } from "src/app/const/data.const";
import { UtilService } from "../../services/util/util.service";
import { IconComponent } from "../../icons/icon.component";

@Component({
	selector: "ng-ke-navbar",
	imports: [IconComponent, RouterLink, RouterLinkActive],
	templateUrl: "./navbar.component.html",
	styleUrl: "./navbar.component.scss",
	changeDetection: ChangeDetectionStrategy.Eager,
})
export class NavbarComponent {
	utilService = inject(UtilService);
	shopUrl = ngKenyaShopUrl;
	router = inject(Router);

	showMenu = false;

	private readonly url = toSignal(
		this.router.events.pipe(
			filter((event): event is NavigationEnd => event instanceof NavigationEnd),
			map(() => this.router.url),
			startWith(this.router.url),
		),
		{ initialValue: this.router.url },
	);

	/** When browsing an archived year, surface Speakers/Agenda for that year only. */
	readonly archiveYear = computed(() => {
		const match = this.url().match(/^\/archive\/(\d+)/);
		return match ? match[1] : null;
	});

	readonly navLinks = computed(() => {
		const year = this.archiveYear();
		const links: {
			label: string;
			link: string;
			activeClass: string;
		}[] = [
			{
				label: "Home",
				link: "/",
				activeClass: "active",
			},
			{
				label: "Past Events",
				link: "/past-events",
				activeClass: "active",
			},
		];

		if (year) {
			links.push(
				{
					label: "Speakers",
					link: `/archive/${year}/speakers`,
					activeClass: "active",
				},
				{
					label: "Agenda",
					link: `/archive/${year}/schedule`,
					activeClass: "active",
				},
			);
		}

		return links;
	});

	toggleNavbar() {
		this.showMenu = !this.showMenu;
	}
}
