import {
	CommonModule,
	DatePipe,
	JsonPipe,
	NgClass,
	NgOptimizedImage,
} from "@angular/common";
import { Component, inject, Input, signal } from "@angular/core";
import { LucideAngularComponent, LucideAngularModule } from "lucide-angular";
import { ISession, ITalk, ITimeslot } from "src/app/models/speaker.model";
import { UtilService } from "../../services/util/util.service";
import { venueLocation } from "src/app/const/data.const";

@Component({
	selector: "ng-ke-schedule-item",
	imports: [LucideAngularModule, DatePipe, NgClass],
	templateUrl: "./schedule-item.component.html",
	styleUrl: "./schedule-item.component.scss",
	standalone: true,
})
export class SchedhuleItemComponent {
	@Input() session!: ISession;

	@Input() room!: string;
	utilService = inject(UtilService);

	isAddToCalendarOpen = signal(false);

	toggleAddToCalendar(): void {
		this.isAddToCalendarOpen.update((isOpen) => !isOpen);
	}

	private getDescriptionWithRoom(): string {
		const description =
			typeof this.session.description === "string" ? this.session.description : "";
		const speakerNames = this.session.speakers?.length
			? this.session.speakers.map((speaker) => speaker.name).join(", ")
			: "";
		const speakerLine = speakerNames ? `Speaker: ${speakerNames}\n` : "";
		return `${speakerLine}Room: ${this.room}${description ? "\n\n" + description : ""}`;
	}

	addToGoogleCalendar(): void {
		const link = this.utilService.getGoogleCalendarLink(
			this.session.title,
			this.getDescriptionWithRoom(),
			venueLocation,
			this.session.startsAt,
			this.session.endsAt,
		);
		this.utilService.openNewPage(link);
		this.isAddToCalendarOpen.set(false);
	}

	downloadIcs(): void {
		this.utilService.downloadIcsFile(
			this.session.title,
			this.getDescriptionWithRoom(),
			venueLocation,
			this.session.startsAt,
			this.session.endsAt,
		);
		this.isAddToCalendarOpen.set(false);
	}
}
