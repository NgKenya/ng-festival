import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { RouterLink } from "@angular/router";
import {
	hasFullArchive,
	PAST_EVENTS,
} from "src/app/const/events.const";
import { PastEvent } from "src/app/models/event.model";
import { IconComponent } from "src/app/shared/icons/icon.component";
import { UtilService } from "src/app/shared/services/util/util.service";

@Component({
	selector: "ng-ke-past-events",
	imports: [RouterLink, IconComponent],
	templateUrl: "./past-events.component.html",
	changeDetection: ChangeDetectionStrategy.Eager,
})
export class PastEventsComponent {
	private utilService = inject(UtilService);

	readonly events = PAST_EVENTS;

	hasArchive(event: PastEvent): boolean {
		return hasFullArchive(event);
	}

	viewPhotos(url: string): void {
		this.utilService.openNewPage(url);
	}
}
