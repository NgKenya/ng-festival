import { provideHttpClient } from "@angular/common/http";
import {
	HttpTestingController,
	provideHttpClientTesting,
} from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ScheduleComponent } from "./schedule.component";

describe("ScheduleComponent", () => {
	let component: ScheduleComponent;
	let fixture: ComponentFixture<ScheduleComponent>;
	let httpTesting: HttpTestingController;

	/** Matches the "Day One" tab date the component requests on init. */
	const dayOneGrid = [
		{
			date: "2026-08-21T00:00:00",
			isDefault: true,
			rooms: [],
			timeSlots: [
				{
					slotStart: "09:00:00",
					rooms: [
						{
							id: 1,
							name: "Auditorium",
							index: 0,
							session: {
								id: "1",
								title: "Keynote",
								description: "Opening keynote",
								startsAt: "2026-08-21T09:00:00",
								endsAt: "2026-08-21T09:45:00",
								speakers: [{ id: "s1", name: "Ada" }],
								status: null,
								done: false,
								liveUrl: null,
								recordingUrl: null,
							},
						},
					],
				},
			],
		},
	];

	function flushSchedule(grid: object[] = dayOneGrid) {
		httpTesting
			.expectOne((request) => request.url.endsWith("/GridSmart"))
			.flush(grid);
	}

	function flushSpeakerProfiles() {
		httpTesting
			.expectOne((request) => request.url.endsWith("/Speakers"))
			.flush([{ id: "s1", profilePicture: "ada.png", tagLine: "Engineer" }]);
	}

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ScheduleComponent],
			providers: [provideHttpClient(), provideHttpClientTesting()],
		}).compileComponents();

		fixture = TestBed.createComponent(ScheduleComponent);
		component = fixture.componentInstance;
		httpTesting = TestBed.inject(HttpTestingController);
		fixture.detectChanges();
	});

	afterEach(() => {
		httpTesting.verify();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
		flushSchedule();
		flushSpeakerProfiles();
	});

	it("should render the sessions for the selected day with speaker profiles", () => {
		flushSchedule();
		flushSpeakerProfiles();
		fixture.detectChanges();

		expect(component.isLoading).toBe(false);
		expect(component.talkList).toHaveLength(1);
		expect(component.talkList[0].rooms[0].session.speakers[0]).toEqual(
			expect.objectContaining({
				profilePicture: "ada.png",
				role: "Engineer",
			}),
		);

		const items = (fixture.nativeElement as HTMLElement).querySelectorAll(
			"ng-ke-schedule-item",
		);
		expect(items).toHaveLength(1);
	});

	it("should show an empty state when no day matches", () => {
		flushSchedule([]);
		flushSpeakerProfiles();
		fixture.detectChanges();

		expect(component.talkList).toEqual([]);
		expect(
			(fixture.nativeElement as HTMLElement).textContent,
		).toContain("Sessions coming soon");
	});

	it("should switch days when a day tab is clicked", () => {
		flushSchedule();
		flushSpeakerProfiles();
		fixture.detectChanges();

		const tabs = (fixture.nativeElement as HTMLElement).querySelectorAll<
			HTMLButtonElement
		>("[role=tab]");
		tabs[1].click();
		flushSchedule([]);
		flushSpeakerProfiles();
		fixture.detectChanges();

		expect(component.eventDate()).toBe(component.days[1].date);
		expect(tabs[0].getAttribute("aria-selected")).toBe("false");
		expect(tabs[1].getAttribute("aria-selected")).toBe("true");
	});

	it("should flag an error when the schedule request fails", () => {
		httpTesting
			.expectOne((request) => request.url.endsWith("/GridSmart"))
			.error(new ProgressEvent("network error"));

		expect(component.hasError).toBe(true);
		expect(component.isLoading).toBe(false);
	});
});
