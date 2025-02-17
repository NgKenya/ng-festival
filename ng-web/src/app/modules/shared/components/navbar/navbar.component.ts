import { Component, inject } from "@angular/core";
import { Router } from "@angular/router";
import {
	ngKenya2024Feedback,
	sponsorhsip_Deck,
} from "src/app/const/data.const";
import { UtilService } from "src/app/services/util/util.service";

@Component({
	selector: "app-navbar",
	templateUrl: "./navbar.component.html",
	styleUrls: ["./navbar.component.scss"],
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
			link: "/home",
			activeClass: "active",
		},
		// {
		// 	label: "Speakers",
		// 	link: "/speakers",
		// 	activeClass: "active",
		// },
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
	];

	openContact() {
		this.router.navigate(["/contact-us"]);
	}
}
