import {
	ComponentFixture,
	DeferBlockBehavior,
	DeferBlockState,
	TestBed,
} from "@angular/core/testing";
import { ISpeaker } from "src/app/models/speaker.model";
import { SpeakerCardComponent } from "./speaker-card.component";

describe("SpeakerCardComponent", () => {
	let component: SpeakerCardComponent;
	let fixture: ComponentFixture<SpeakerCardComponent>;

	const speaker = {
		id: "s1",
		firstName: "Ada",
		lastName: "Lovelace",
		fullName: "Ada Lovelace",
		bio: "First programmer.",
		tagLine: "Software Engineer",
		profilePicture: "ada.png",
		sessions: [{ id: "1", name: "Zoneless Angular in practice" }],
		isTopSpeaker: true,
		links: [
			{ title: "LinkedIn", url: "https://linkedin.com/in/ada", linkType: "LinkedIn" },
			{ title: "Website", url: "https://ada.dev", linkType: "Blog" },
		],
	} as unknown as ISpeaker;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [SpeakerCardComponent],
			deferBlockBehavior: DeferBlockBehavior.Manual,
		}).compileComponents();

		fixture = TestBed.createComponent(SpeakerCardComponent);
		component = fixture.componentInstance;
		fixture.componentRef.setInput("speaker", speaker);
		fixture.detectChanges();
	});

	/** The card body sits behind a `@defer` block, so render it explicitly. */
	async function renderCardBody() {
		const [deferBlock] = await fixture.getDeferBlocks();
		await deferBlock.render(DeferBlockState.Complete);
	}

	it("should create", () => {
		expect(component).toBeTruthy();
	});

	it("should render the speaker details and their session", async () => {
		await renderCardBody();

		const text = (fixture.nativeElement as HTMLElement).textContent ?? "";
		expect(text).toContain("Ada Lovelace");
		expect(text).toContain("Software Engineer");
		expect(text).toContain("Zoneless Angular in practice");
		expect(text).toContain("Top speaker");
	});

	it("should map link types to icon names", () => {
		expect(
			component.getLinkIcon({
				title: "LinkedIn",
				url: "https://linkedin.com/in/ada",
				linkType: "LinkedIn",
			}),
		).toBe("linkedin");
		expect(
			component.getLinkIcon({
				title: "Twitter",
				url: "https://x.com/ada",
				linkType: "Twitter",
			}),
		).toBe("x-twitter");
		expect(
			component.getLinkIcon({
				title: "Website",
				url: "https://ada.dev",
				linkType: "Blog",
			}),
		).toBe("globe");
	});
});
