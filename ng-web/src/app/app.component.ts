import { CommonModule } from "@angular/common";
import { Component, inject, OnInit } from "@angular/core";
import { NavigationEnd, Router, Event, RouterModule } from "@angular/router";

import { IStaticMethods } from "preline/preline";
import { NavbarComponent } from "./shared/components/navbar/navbar.component";
import { FooterComponent } from "./shared/components/footer/footer.component";
declare global {
	interface Window {
		HSStaticMethods: IStaticMethods;
	}
}

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
	imports: [CommonModule, RouterModule, NavbarComponent, FooterComponent],
	standalone: true,
})
export class AppComponent implements OnInit {
	title = "ng-web";
	router = inject(Router);

	ngOnInit() {
		this.router.events.subscribe((event: Event) => {
			if (event instanceof NavigationEnd) {
				setTimeout(() => {
					window.HSStaticMethods.autoInit();
				}, 100);
			}
		});
	}
}
