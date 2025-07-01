import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from "@angular/core";
import { Router } from "@angular/router";
import { ATeam, NgKenyaPartners, ticketUrl } from "src/app/const/data.const";
import { IContent, IDescription, IPartner } from "src/app/models/data.model";

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.scss"],
	standalone: false,
})
export class HomeComponent {
	isVisible: boolean = false;
	router = inject(Router);
	showVideo = false;

	whatToExpect: IDescription[] = [
		{
			icon: "blocks",
			desc1: "Learn core Angular Concepts,",
			desc2:
				"From web concepts like the browser DOM API to TypeScript and advanced Angular features.",
		},
		{
			icon: "pencil-ruler",
			desc1: "Engaging Workshops and presentations,",
			desc2:
				"Deepen your understanding of the Angular framework through engaging workshops and presentations.",
		},
		{
			icon: "cable",
			desc1: "Connect and Network,",
			desc2:
				"Connect with a vibrant community of fellow Angular enthusiasts and share knowledge and experiences.",
		},
	];

	eventDetails: IDescription[] = [
		{
			icon: "calendar-days",
			desc1: "Date",
			desc2: "September 7, 2024",
		},
		{
			icon: "locate-fixed",
			desc1: "Venue",
			desc2: "Ihub , Jahazi Ground Floor , James Gichuru Road ",
		},
		{
			icon: "calendar-days",
			desc1: "Organized By",
			desc2: "Angular Kenya",
		},
	];

	eventCTA: IContent[] = [
		{
			link: "",
			text: "Get Your Event Ticket",
			image_url: "/assets/Images/speakers/allela.jpg",
		},
		{
			link: "",
			text: "Become a sponsor",
			image_url: "/assets/Images/speakers/allela.jpg",
		},
		{
			link: "",
			text: "Submit A  Talk",
			image_url: "/assets/Images/speakers/allela.jpg",
		},
	];
	partners: IPartner[] = NgKenyaPartners;

	aTeam = ATeam;
	openNewPage(link: string) {
		window.open(link, "_blank");
	}

	getTickets() {
		window.open(ticketUrl, "_blank");
	}

	openVideo() {
		this.showVideo = true;
	}

	closeVideo() {
		this.showVideo = false;
	}
}
