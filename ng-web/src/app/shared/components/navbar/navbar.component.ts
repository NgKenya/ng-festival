import { Component, inject, ChangeDetectionStrategy } from "@angular/core";
import {Router, RouterModule } from "@angular/router";
import {
	sponsorhsip_Deck,
	ngKenya2025Feedback,
	ngKenyaShopUrl,
	ngKenya2026Photos,
} from "src/app/const/data.const";
import { UtilService } from "../../services/util/util.service";
import { IconComponent } from "../../icons/icon.component";

@Component({
  selector: "ng-ke-navbar",
  imports: [IconComponent, RouterModule],
  templateUrl: "./navbar.component.html",
  styleUrl: "./navbar.component.scss",
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: true
})
export class NavbarComponent {
	utilService = inject(UtilService);
	deck = sponsorhsip_Deck;
	feedback = ngKenya2025Feedback;
	shopUrl = ngKenyaShopUrl;
	photosUrl = ngKenya2026Photos;

	showMenu = false;
	isVisible: boolean = false;
	currentUrl = "";
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
		{
			label: "Agenda",
			link: "/schedule",
			activeClass: "active",
		},
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

	onViewPhotosClicked() {
		this.utilService.openNewPage(this.photosUrl);
	}

  onGetTicketsClicked() {
    this.utilService.getTickets();
  }
}
