import { Component, DestroyRef, inject, OnInit } from "@angular/core";

import { SpeakerCardComponent } from "src/app/shared/components/speaker-card/speaker-card.component";
import { SessionizeService } from "src/app/shared/services/sessionize/sessionize.service";
import { UtilService } from "src/app/shared/services/util/util.service";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { ISpeaker } from "src/app/models/speaker.model";

@Component({
	selector: "app-speakers",
	templateUrl: "./speakers.component.html",
	styleUrls: ["./speakers.component.scss"],
	imports: [SpeakerCardComponent],
	standalone: true,
})
export class SpeakersComponent implements OnInit {
	speakers: ISpeaker[] = [];
	utilService = inject(UtilService);
	speakerService = inject(SessionizeService);
	private destroyRef = inject(DestroyRef);

	ngOnInit(): void {
		this.fetchSpeakers();
	}

	fetchSpeakers() {
		this.speakerService
			.getAllSpeakers()
			.pipe(takeUntilDestroyed(this.destroyRef))
			.subscribe({
				next: (res) => {
					this.speakers = res;
				},
				complete: () => {},
				error: (err) => {},
			});
	}
}
