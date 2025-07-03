import { Component, inject } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import {
	sponsorhsip_Deck,
	ngKenya2024Feedback,
} from "src/app/const/data.const";
import { UtilService } from "../../services/util/util.service";
import { LucideAngularModule } from "lucide-angular";

@Component({
	selector: "ng-ke-navbar",
	imports: [LucideAngularModule, RouterModule],
	templateUrl: "./navbar.component.html",
	styleUrl: "./navbar.component.scss",
})
export class NavbarComponent {
	utilService = inject(UtilService);
	deck = sponsorhsip_Deck;
	feedback = ngKenya2024Feedback;
	showMenu = false;
	isVisible: boolean = false;
	toggleNavbar() {
		this.showMenu = !this.showMenu;
	}

	router = inject(Router);
	navLinks: {
		label: string;
		link?: string;
		activeClass: string;
		fragment?: string;
	}[] = [
		{
			label: "Home",
			link: "",
			activeClass: "active",
		},
		{
			label: "Speakers",
			link: "/speakers",
			activeClass: "active",
		},
		// {
		// 	label: "Agenda",
		// 	link: "/schedule",
		// 	activeClass: "active",
		// },
		// {
		// 	label: "Contact Us",
		// 	activeClass: "active",
		// 	link: "/contact-us",
		// },
		// {
		// 	label: "Sponsor Us",
		// 	activeClass: "active",
		// 	link: "/sponsors",
		// },
	];

	openContact() {
		this.router.navigate(["/contact-us"]);
	}

	openTickets() {
		this.utilService.openNewPage("https://vabu.app/ngkenya-2025");
	}
}
