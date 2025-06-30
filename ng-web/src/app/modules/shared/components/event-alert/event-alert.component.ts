import { Component, inject, OnInit } from "@angular/core";
import {
	CountdownService,
	IDate,
} from "src/app/services/countdown/countdown.service";

@Component({
    selector: "app-event-alert",
    templateUrl: "./event-alert.component.html",
    styleUrl: "./event-alert.component.scss",
    standalone: false
})
export class EventAlertComponent implements OnInit {
	countdownService = inject(CountdownService);
	ticketsCountdown!: IDate;
	ngOnInit(): void {
		this.getDaysLeft();
	}
	getDaysLeft() {
		this.countdownService.startCountdown(new Date("June 4,2025")).subscribe({
			next: (res) => {
				this.ticketsCountdown = res;
			},
		});
	}
}
