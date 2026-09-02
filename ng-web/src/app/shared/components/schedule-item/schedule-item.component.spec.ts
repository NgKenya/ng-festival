import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ISession } from "src/app/models/speaker.model";
import { SchedhuleItemComponent } from "./schedule-item.component";

describe("SchedhuleItemComponent", () => {
	let component: SchedhuleItemComponent;
	let fixture: ComponentFixture<SchedhuleItemComponent>;

	const session = {
		id: "1",
		title: "Zoneless Angular in practice",
		description: "A deep dive into zoneless change detection.",
		startsAt: "2026-08-21T09:00:00",
		endsAt: "2026-08-21T09:45:00",
		speakers: [
			{ id: "s1", name: "Ada", profilePicture: "ada.png", role: "Engineer" },
		],
		status: null,
		done: false,
		liveUrl: null,
		recordingUrl: null,
	} as unknown as ISession;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [SchedhuleItemComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(SchedhuleItemComponent);
		component = fixture.componentInstance;
		fixture.componentRef.setInput("session", session);
		fixture.componentRef.setInput("room", "Auditorium");
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});

	it("should render the session title, room and speakers", () => {
		const text = (fixture.nativeElement as HTMLElement).textContent ?? "";
		expect(text).toContain("Zoneless Angular in practice");
		expect(text).toContain("Auditorium");
		expect(text).toContain("Ada");
	});

	it("should toggle the add-to-calendar menu", () => {
		expect(component.isAddToCalendarOpen()).toBe(false);

		component.toggleAddToCalendar();
		fixture.detectChanges();
		expect(component.isAddToCalendarOpen()).toBe(true);
		expect((fixture.nativeElement as HTMLElement).textContent).toContain(
			"Google Calendar",
		);
	});

	it("should mark completed sessions", () => {
		fixture.componentRef.setInput("session", { ...session, done: true });
		fixture.detectChanges();

		expect((fixture.nativeElement as HTMLElement).textContent).toContain(
			"Completed",
		);
	});
});
