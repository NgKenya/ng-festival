import { DatePipe, NgClass } from "@angular/common";
import {
	ChangeDetectionStrategy,
	Component,
	inject,
	input,
	signal,
} from "@angular/core";
import { ISession } from "src/app/models/speaker.model";
import { UtilService } from "../../services/util/util.service";
import { venueLocation } from "src/app/const/data.const";
import { IconComponent } from "../../icons/icon.component";

@Component({
	selector: "ng-ke-schedule-item",
	imports: [IconComponent, DatePipe, NgClass],
	templateUrl: "./schedule-item.component.html",
	styleUrl: "./schedule-item.component.scss",
	changeDetection: ChangeDetectionStrategy.Eager,
})
export class SchedhuleItemComponent {
	readonly session = input.required<ISession>();

	readonly room = input.required<string>();
	utilService = inject(UtilService);

	isAddToCalendarOpen = signal(false);

	toggleAddToCalendar(): void {
		this.isAddToCalendarOpen.update((isOpen) => !isOpen);
	}

	private getDescriptionWithRoom(): string {
		const session = this.session();
		const description =
			typeof session.description === "string" ? session.description : "";
		const speakerNames = session.speakers?.length
			? session.speakers.map((speaker) => speaker.name).join(", ")
			: "";
		const speakerLine = speakerNames ? `Speaker: ${speakerNames}\n` : "";
		return `${speakerLine}Room: ${this.room()}${description ? "\n\n" + description : ""}`;
	}

	addToGoogleCalendar(): void {
		const session = this.session();
		const link = this.utilService.getGoogleCalendarLink(
			session.title,
			this.getDescriptionWithRoom(),
			venueLocation,
			session.startsAt,
			session.endsAt,
		);
		this.utilService.openNewPage(link);
		this.isAddToCalendarOpen.set(false);
	}

	downloadIcs(): void {
		const session = this.session();
		this.utilService.downloadIcsFile(
			session.title,
			this.getDescriptionWithRoom(),
			venueLocation,
			session.startsAt,
			session.endsAt,
		);
		this.isAddToCalendarOpen.set(false);
	}
}
