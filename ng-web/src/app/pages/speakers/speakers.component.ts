import { Component, DestroyRef, inject, OnInit, ChangeDetectionStrategy } from "@angular/core";

import { IconComponent } from "src/app/shared/icons/icon.component";
import { SpeakerCardComponent } from "src/app/shared/components/speaker-card/speaker-card.component";
import { SessionizeService } from "src/app/shared/services/sessionize/sessionize.service";
import { UtilService } from "src/app/shared/services/util/util.service";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { ISpeaker } from "src/app/models/speaker.model";
import { ngKenya2026Photos } from "src/app/const/data.const";

@Component({
	selector: "app-speakers",
	templateUrl: "./speakers.component.html",
	styleUrls: ["./speakers.component.scss"],
	imports: [SpeakerCardComponent, IconComponent],
	changeDetection: ChangeDetectionStrategy.Eager,
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

	viewPastPhotos() {
		this.utilService.openNewPage(ngKenya2026Photos);
	}
}
