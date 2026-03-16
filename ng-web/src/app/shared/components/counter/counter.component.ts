import {Component, OnInit, inject, signal} from "@angular/core";
import { Subscription } from "rxjs";
import {
  ngKenya2026CallForSpeakers,
	ngKenya2025Photos,
	ticketUrl,
} from "src/app/const/data.const";
import {
	IDate,
	CountdownService,
} from "../../services/countdown/countdown.service";
import { UtilService } from "../../services/util/util.service";
import { LucideAngularModule } from "lucide-angular";

interface BarcodeBar {
	width: string;
	height: string;
}
@Component({
	selector: "app-counter",
	templateUrl: "./counter.component.html",
	styleUrl: "./counter.component.scss",
	standalone: true,
	imports: [LucideAngularModule],
})
export class CounterComponent implements OnInit {
	officialDate: Date = new Date("August 22 2026");
	photoLink: string = ngKenya2025Photos;
	ticketLink: string = ticketUrl;
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

  ctaButtons = signal([
    {
      label: 'Submit Talk',
      icon: 'external-link',
      action: () => this.utilService.openNewPage(ngKenya2026CallForSpeakers),
    },
    {
      label: 'Get Tickets',
      icon: 'external-link',
      action: () => this.utilService.getTickets(),
    },
    {
      label: 'NG Kenya 2025 Photos',
      icon: 'external-link',
      action: () => this.utilService.openNewPage(ngKenya2025Photos),
    },
  ])

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

  onGetTicketsClicked() {
    this.utilService.getTickets();
  }

  onPastPhotosClicked() {
    this.utilService.openNewPage(ngKenya2025Photos)
  }

  onSubmitTalkClicked() {
    this.utilService.openNewPage(ngKenya2026CallForSpeakers);
  }

	ngOnDestroy(): void {
		this.countdownSubscription?.unsubscribe();
	}

	private generateBarcode(): void {
		this.barcodeData = Array.from({ length: 25 }, () => ({
			width: Math.random() > 0.6 ? "3px" : Math.random() > 0.3 ? "2px" : "1px",
			height: Math.random() * 25 + 35 + "px",
		}));
	}
}
