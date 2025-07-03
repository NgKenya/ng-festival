import { inject, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ticketUrl } from "src/app/const/data.const";

@Injectable({
	providedIn: "root",
})
export class UtilService {
	route = inject(Router);
	constructor() {}

	openNewPage(link: string) {
		window.open(link, "_blank");
	}

	getTickets() {
		window.open(ticketUrl, "_blank");
	}

	getMinutesDifference = (startTime: string, endTime: string) => {
		const start = new Date(startTime);
		const end = new Date(endTime);

		let diff = end.getTime() - start.getTime();

		return Math.floor(diff / (1000 * 60));
	};

	getDimensions(imageSrc: string): Promise<{ width: number; height: number }> {
		return new Promise((resolve) => {
			const img = new Image();
			img.src = imageSrc;

			img.onload = () => {
				resolve({ width: img.naturalWidth, height: img.naturalHeight });
			};
		});
	}

	getSchedule() {
		this.route.navigate(["/schedule"]);
	}
}
