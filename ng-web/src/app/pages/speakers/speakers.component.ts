import { Component, DestroyRef, inject, OnInit } from "@angular/core";

import { LucideAngularModule } from "lucide-angular";
import { SpeakerCardComponent } from "src/app/shared/components/speaker-card/speaker-card.component";
import { SessionizeService } from "src/app/shared/services/sessionize/sessionize.service";
import { UtilService } from "src/app/shared/services/util/util.service";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { ISpeaker } from "src/app/models/speaker.model";

@Component({
	selector: "app-speakers",
	templateUrl: "./speakers.component.html",
	styleUrls: ["./speakers.component.scss"],
	imports: [SpeakerCardComponent, LucideAngularModule],
	standalone: true,
})
export class SpeakersComponent implements OnInit {
	speakers: ISpeaker[] = [];
	isLoading = true;
	hasError = false;

	utilService = inject(UtilService);
	speakerService = inject(SessionizeService);
	private destroyRef = inject(DestroyRef);

	/** Skeleton placeholders shown while the speaker list is loading. */
	readonly skeletons = Array.from({ length: 6 });

	ngOnInit(): void {
		this.fetchSpeakers();
	}

	fetchSpeakers() {
		this.isLoading = true;
		this.hasError = false;

		this.speakerService
			.getAllSpeakers()
			.pipe(takeUntilDestroyed(this.destroyRef))
			.subscribe({
				next: (res) => {
					this.speakers = (res ?? []).slice().reverse();
				},
				complete: () => {
					this.isLoading = false;
				},
				error: () => {
					this.hasError = true;
					this.isLoading = false;
				},
			});
	}

	getTickets() {
		this.utilService.getTickets();
	}
}
