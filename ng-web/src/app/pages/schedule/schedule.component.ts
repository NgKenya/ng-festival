import { CommonModule } from "@angular/common";
import { Component, DestroyRef, inject, OnInit, signal } from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { LucideAngularModule } from "lucide-angular";
import { map } from "rxjs";
import {
	ISession,
	ISpeakerProfile,
	ITimeslot,
} from "src/app/models/speaker.model";
import { SchedhuleItemComponent } from "src/app/shared/components/schedule-item/schedule-item.component";
import { SessionizeService } from "src/app/shared/services/sessionize/sessionize.service";

@Component({
	selector: "app-schedule",
	templateUrl: "./schedule.component.html",
	imports: [SchedhuleItemComponent, LucideAngularModule, CommonModule],
	styleUrls: ["./schedule.component.scss"],
	standalone: true,
})
export class ScheduleComponent implements OnInit {
	talkList: ITimeslot[] = [];
	activeTime = new Date();
	eventDate = signal<string | undefined>("July 4, 2025");
	schedhuleService = inject(SessionizeService);
	scheduleSpeakers: ISpeakerProfile[] = [];
	private readonly DESTROY_REF = inject(DestroyRef);
	ngOnInit(): void {
		this.getSession(this.eventDate()!);

		// this.reshuffleTalks();
		// setInterval(() => {
		// 	this.activeTime = new Date();
		// 	// this.reshuffleTalks();
		// }, 900000);
	}

	getSession(date: string) {
		this.eventDate.set(date);
		let targetDate = new Date(date);

		this.schedhuleService
			.getSchedhule()
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
				error: (err) => {},
			});
	}

	/***
	 * fetch talks *
	 * fetch speakers>id, image
	 */

	fetchSpeakers() {
		this.schedhuleService
			.getAllSpeakersProfile()
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
				},
				error: (err) => {},
			});
	}

	getSpeakerById(profileId: string) {
		return this.scheduleSpeakers.find((speaker) => speaker.id === profileId);
	}

	updateSessions() {
		console.log(
			this.talkList.map((talk) => ({
				...talk,
				rooms: talk.rooms.map((room) => ({
					...room,
					session: {
						...room.session,
						speakers: room.session.speakers.map((speaker: { id: string }) => {
							const profile = this.scheduleSpeakers.find(
								(s) => s.id === speaker.id,
							);
							return {
								...speaker,
								id: speaker.id,
								profilePicture: this.getSpeakerById(speaker.id),
							};
						}),
					},
				})),
			})),
		);
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
	// reshuffleTalks() {
	// 	const now = this.activeTime.toISOString().slice(0, 19);
	// 	console.log(now);

	// 	const newTalks = this.talkList.filter((x) => {
	// 		let xstartTime = new Date(x.endTime);
	// 		return xstartTime > this.activeTime;
	// 	});

	// 	const doneTalks = this.talkList.filter((x) => {
	// 		let xstartTime = new Date(x.endTime);
	// 		return xstartTime < this.activeTime;
	// 	});

	// 	doneTalks.forEach((talk) => (talk.isDone = true));

	// 	this.talkList = [...newTalks, ...doneTalks];
	// }
}
