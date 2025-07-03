import { Component, DestroyRef, inject, OnInit } from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { LucideAngularModule } from "lucide-angular";
import { map } from "rxjs";
import { TalkList } from "src/app/const/data.const";
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
	imports: [SchedhuleItemComponent, LucideAngularModule],
	styleUrls: ["./schedule.component.scss"],
	standalone: true,
})
export class ScheduleComponent implements OnInit {
	talkList: ITimeslot[] = [];
	activeTime = new Date();
	schedhuleService = inject(SessionizeService);
	scheduleSpeakers: ISpeakerProfile[] = [];
	private readonly DESTROY_REF = inject(DestroyRef);
	ngOnInit(): void {
		this.getSession("July 4, 2025");

		// this.reshuffleTalks();

		// setInterval(() => {
		// 	this.activeTime = new Date();
		// 	// this.reshuffleTalks();
		// }, 900000);
	}

	getSession(date: string) {
		let targetDate = new Date(date);
		this.schedhuleService
			.getSchedhule()
			.pipe(takeUntilDestroyed(this.DESTROY_REF))
			.subscribe({
				next: (res) => {
					const filteredTalks = res.find((day) => {
						const dayDate = new Date(day.date).toDateString();
						const target = targetDate.toDateString();
						console.log("Comparing:", dayDate, "with", target);
						return dayDate === target;
					});

					if (!filteredTalks) {
						console.warn("No schedule found for date:", date);
						this.talkList = [];
						return;
					}

					this.talkList = filteredTalks.timeSlots;
				},
				complete: () => {
					this.fetchSpeakers();
				},
				error: (err) => {
					console.error("Error fetching schedule:", err);
				},
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
