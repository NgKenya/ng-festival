import { NgClass } from "@angular/common";
import {
	ChangeDetectionStrategy,
	Component,
	computed,
	DestroyRef,
	inject,
	OnDestroy,
	OnInit,
	signal,
} from "@angular/core";
import { takeUntilDestroyed, toSignal } from "@angular/core/rxjs-interop";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { map } from "rxjs";
import { getPastEvent } from "src/app/const/events.const";
import {
	ISpeakerProfile,
	ITimeslot,
} from "src/app/models/speaker.model";
import { SchedhuleItemComponent } from "src/app/shared/components/schedule-item/schedule-item.component";
import { IconComponent } from "src/app/shared/icons/icon.component";
import { SessionizeService } from "src/app/shared/services/sessionize/sessionize.service";
import { UtilService } from "src/app/shared/services/util/util.service";

@Component({
	selector: "app-schedule",
	templateUrl: "./schedule.component.html",
	imports: [SchedhuleItemComponent, IconComponent, NgClass, RouterLink],
	styleUrls: ["./schedule.component.scss"],
	changeDetection: ChangeDetectionStrategy.Eager,
})
export class ScheduleComponent implements OnInit, OnDestroy {
	talkList: ITimeslot[] = [];
	activeTime = new Date();
	schedhuleService = inject(SessionizeService);
	utilService = inject(UtilService);
	scheduleSpeakers: ISpeakerProfile[] = [];
	isLoading = true;
	hasError = false;
	private readonly DESTROY_REF = inject(DestroyRef);
	private refreshIntervalId?: ReturnType<typeof setInterval>;
	private route = inject(ActivatedRoute);

	private readonly yearParam = toSignal(
		this.route.paramMap.pipe(map((params) => Number(params.get("year")))),
		{ initialValue: Number(this.route.snapshot.paramMap.get("year")) },
	);

	readonly event = computed(() => getPastEvent(this.yearParam()));

	readonly days = computed(() => this.event()?.days ?? []);

	eventDate = signal<string | undefined>(undefined);

	/** Skeleton placeholders shown while the schedule is loading. */
	readonly skeletons = Array.from({ length: 4 });

	ngOnInit(): void {
		const firstDay = this.days()[0]?.date;
		if (firstDay) {
			this.getSession(firstDay);
		} else {
			this.hasError = true;
			this.isLoading = false;
		}

		this.refreshIntervalId = setInterval(() => {
			this.activeTime = new Date();
			this.talkList = this.updateSessionsDoneState(this.talkList);
		}, 60000);
	}

	ngOnDestroy(): void {
		if (this.refreshIntervalId) {
			clearInterval(this.refreshIntervalId);
		}
	}

	private updateSessionsDoneState(timeSlots: ITimeslot[]): ITimeslot[] {
		return timeSlots.map((slot) => ({
			...slot,
			rooms: slot.rooms.map((room) => ({
				...room,
				session: {
					...room.session,
					done: new Date(room.session.endsAt) < this.activeTime,
				},
			})),
		}));
	}

	getSession(date: string) {
		const baseUrl = this.event()?.sessionizeBaseUrl;
		if (!baseUrl) {
			this.hasError = true;
			this.isLoading = false;
			return;
		}

		this.eventDate.set(date);
		this.isLoading = true;
		this.hasError = false;
		const targetDate = new Date(date);

		this.schedhuleService
			.getSchedhule(baseUrl)
			.pipe(takeUntilDestroyed(this.DESTROY_REF))
			.subscribe({
				next: (res) => {
					const filteredTalks = res.find((day) => {
						const dayDate = new Date(day.date).toDateString();
						const target = targetDate.toDateString();

						return dayDate === target;
					});

					if (!filteredTalks) {
						this.talkList = [];
						return;
					}

					this.talkList = filteredTalks.timeSlots;
				},
				complete: () => {
					this.fetchSpeakers();
				},
				error: () => {
					this.hasError = true;
					this.isLoading = false;
				},
			});
	}

	fetchSpeakers() {
		const baseUrl = this.event()?.sessionizeBaseUrl;
		if (!baseUrl) {
			this.hasError = true;
			this.isLoading = false;
			return;
		}

		this.schedhuleService
			.getAllSpeakersProfile(baseUrl)
			.pipe(
				takeUntilDestroyed(this.DESTROY_REF),
				map((speakers) =>
					speakers.map((speaker) => ({
						id: speaker.id,
						profilePicture: speaker.profilePicture,
						role: speaker.tagLine,
					})),
				),
			)
			.subscribe({
				next: (res) => {
					this.scheduleSpeakers = res;
				},
				complete: () => {
					this.talkList = this.updateSpeakersWithProfile(this.talkList);
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

	getSpeakerById(profileId: string) {
		return this.scheduleSpeakers.find((speaker) => speaker.id === profileId);
	}

	updateSpeakersWithProfile(timeSlots: ITimeslot[]): ITimeslot[] {
		return timeSlots.map((slot) => ({
			...slot,
			rooms: slot.rooms.map((room) => ({
				...room,
				session: {
					...room.session,
					speakers:
						room.session.speakers.length < 0
							? []
							: room.session.speakers.map((speaker) => ({
									...speaker,
									profilePicture: this.getSpeakerById(speaker.id)
										?.profilePicture!,
									role: this.getSpeakerById(speaker.id)?.role!,
							  })),
					done: new Date(room.session.endsAt) < this.activeTime,
				},
			})),
		}));
	}
}
