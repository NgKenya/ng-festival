import {
	ChangeDetectionStrategy,
	Component,
	computed,
	DestroyRef,
	inject,
	OnInit,
} from "@angular/core";
import { takeUntilDestroyed, toSignal } from "@angular/core/rxjs-interop";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { map } from "rxjs";
import { getPastEvent } from "src/app/const/events.const";
import { ISpeaker } from "src/app/models/speaker.model";
import { IconComponent } from "src/app/shared/icons/icon.component";
import { SpeakerCardComponent } from "src/app/shared/components/speaker-card/speaker-card.component";
import { SessionizeService } from "src/app/shared/services/sessionize/sessionize.service";
import { UtilService } from "src/app/shared/services/util/util.service";

@Component({
	selector: "app-speakers",
	templateUrl: "./speakers.component.html",
	styleUrls: ["./speakers.component.scss"],
	imports: [SpeakerCardComponent, IconComponent, RouterLink],
	changeDetection: ChangeDetectionStrategy.Eager,
})
export class SpeakersComponent implements OnInit {
	speakers: ISpeaker[] = [];
	isLoading = true;
	hasError = false;

	utilService = inject(UtilService);
	speakerService = inject(SessionizeService);
	private destroyRef = inject(DestroyRef);
	private route = inject(ActivatedRoute);

	private readonly yearParam = toSignal(
		this.route.paramMap.pipe(map((params) => Number(params.get("year")))),
		{ initialValue: Number(this.route.snapshot.paramMap.get("year")) },
	);

	readonly event = computed(() => getPastEvent(this.yearParam()));

	/** Skeleton placeholders shown while the speaker list is loading. */
	readonly skeletons = Array.from({ length: 6 });

	ngOnInit(): void {
		this.fetchSpeakers();
	}

	fetchSpeakers() {
		const baseUrl = this.event()?.sessionizeBaseUrl;
		if (!baseUrl) {
			this.hasError = true;
			this.isLoading = false;
			return;
		}

		this.isLoading = true;
		this.hasError = false;

		this.speakerService
			.getAllSpeakers(baseUrl)
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
		const photosUrl = this.event()?.photosUrl;
		if (photosUrl) {
			this.utilService.openNewPage(photosUrl);
		}
	}
}
