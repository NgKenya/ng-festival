import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { RouterLink } from "@angular/router";
import {
	CURRENT_EVENT_YEAR,
	PAST_EVENTS,
} from "src/app/const/events.const";
import { ngKenyaLogo, ngKenyaShopUrl } from "src/app/const/data.const";
import { IconComponent } from "src/app/shared/icons/icon.component";
import { UtilService } from "src/app/shared/services/util/util.service";

@Component({
	selector: "ng-ke-home",
	imports: [IconComponent, RouterLink],
	templateUrl: "./home.component.html",
	changeDetection: ChangeDetectionStrategy.Eager,
	styleUrl: "./home.component.scss",
})
export class HomeComponent {
	private utilService = inject(UtilService);

	readonly year = CURRENT_EVENT_YEAR;
	readonly latestPastYear = PAST_EVENTS[0]?.year;
	readonly logo = ngKenyaLogo;

	shopMerch() {
		this.utilService.openNewPage(ngKenyaShopUrl);
	}
}
