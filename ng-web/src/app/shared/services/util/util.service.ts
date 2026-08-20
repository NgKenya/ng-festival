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

	private toIcsDate(date: string): string {
		return new Date(date)
			.toISOString()
			.replace(/[-:]/g, "")
			.split(".")[0] + "Z";
	}

	getGoogleCalendarLink(
		title: string,
		description: string,
		location: string,
		startTime: string,
		endTime: string,
	): string {
		const params = new URLSearchParams({
			action: "TEMPLATE",
			text: title,
			details: description ?? "",
			location: location ?? "",
			dates: `${this.toIcsDate(startTime)}/${this.toIcsDate(endTime)}`,
		});

		return `https://calendar.google.com/calendar/render?${params.toString()}`;
	}

	downloadIcsFile(
		title: string,
		description: string,
		location: string,
		startTime: string,
		endTime: string,
	): void {
		const icsContent = [
			"BEGIN:VCALENDAR",
			"VERSION:2.0",
			"PRODID:-//NG Kenya Conference//EN",
			"BEGIN:VEVENT",
			`UID:${Date.now()}@ngkenya.dev`,
			`DTSTAMP:${this.toIcsDate(new Date().toISOString())}`,
			`DTSTART:${this.toIcsDate(startTime)}`,
			`DTEND:${this.toIcsDate(endTime)}`,
			`SUMMARY:${title}`,
			`DESCRIPTION:${(description ?? "").replace(/\n/g, "\\n")}`,
			`LOCATION:${location ?? ""}`,
			"END:VEVENT",
			"END:VCALENDAR",
		].join("\r\n");

		const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
		const url = window.URL.createObjectURL(blob);
		const link = document.createElement("a");
		link.href = url;
		link.download = `${title.replace(/[^a-z0-9]/gi, "_")}.ics`;
		link.click();
		window.URL.revokeObjectURL(url);
	}
}
