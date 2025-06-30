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

interface BarcodeBar {
	width: string;
	height: string;
}
@Component({
    selector: "app-counter",
    templateUrl: "./counter.component.html",
    styleUrl: "./counter.component.scss",
    standalone: false
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

	barcodeData: BarcodeBar[] = [];
	stubBarcodeLines: number[] = [];
	ngOnInit(): void {
		this.countdownSubscription = this.countdownService
			.startCountdown(this.officialDate)
			.subscribe((remaining: IDate) => {
				this.daysLeftDisplay = remaining;
			});

		this.stubBarcodeLines = Array.from({ length: 20 }, (_, i) => i);
	}

	ngOnDestroy(): void {
		this.countdownSubscription?.unsubscribe();
	}

	private generateBarcode(): void {
		this.barcodeData = Array.from({ length: 45 }, () => ({
			width: Math.random() > 0.6 ? "3px" : Math.random() > 0.3 ? "2px" : "1px",
			height: Math.random() * 25 + 35 + "px",
		}));
	}
}
