import { Component, OnInit, inject } from "@angular/core";
import { Subscription } from "rxjs";
import {
	ngKenya2024Photos,
	ngKenya2025CallForSpeakers,
} from "src/app/const/data.const";
import { UtilService } from "src/app/services/util/util.service";
import {
	CountdownService,
	IDate,
} from "src/app/services/countdown/countdown.service";

@Component({
	selector: "app-counter",
	templateUrl: "./counter.component.html",
	styleUrl: "./counter.component.scss",
})
export class CounterComponent implements OnInit {
	officialDate: Date = new Date("July 5 2025");
	photoLink: string = ngKenya2024Photos;
	callForSpeakersLink: string = ngKenya2025CallForSpeakers;
	daysLeftDisplay: IDate = {
		month: 0,
		day: 0,
		hour: 0,
		minute: 0,
		second: 0,
	};
	utilService = inject(UtilService);
	countdownService = inject(CountdownService);
	private countdownSubscription?: Subscription;

	ngOnInit(): void {
		this.countdownSubscription = this.countdownService
			.startCountdown(this.officialDate)
			.subscribe((remaining: IDate) => {
				this.daysLeftDisplay = remaining;
			});
	}

	ngOnDestroy(): void {
		this.countdownSubscription?.unsubscribe();
	}
}
