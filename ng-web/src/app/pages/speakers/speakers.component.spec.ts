import { provideHttpClient } from "@angular/common/http";
import {
	HttpTestingController,
	provideHttpClientTesting,
} from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ActivatedRoute, convertToParamMap, provideRouter } from "@angular/router";
import { of } from "rxjs";
import { SpeakersComponent } from "./speakers.component";

describe("SpeakersComponent", () => {
	let component: SpeakersComponent;
	let fixture: ComponentFixture<SpeakersComponent>;
	let httpTesting: HttpTestingController;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [SpeakersComponent],
			providers: [
				provideHttpClient(),
				provideHttpClientTesting(),
				provideRouter([]),
				{
					provide: ActivatedRoute,
					useValue: {
						paramMap: of(convertToParamMap({ year: "2026" })),
						snapshot: { paramMap: convertToParamMap({ year: "2026" }) },
					},
				},
			],
		}).compileComponents();

		fixture = TestBed.createComponent(SpeakersComponent);
		component = fixture.componentInstance;
		httpTesting = TestBed.inject(HttpTestingController);
		fixture.detectChanges();
	});

	afterEach(() => {
		httpTesting.verify();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
		httpTesting
			.expectOne((request) => request.url.endsWith("/Speakers"))
			.flush([]);
	});

	it("should show the newest speakers first once the request resolves", () => {
		httpTesting
			.expectOne((request) => request.url.endsWith("/Speakers"))
			.flush([{ fullName: "First" }, { fullName: "Second" }]);

		expect(component.speakers.map((speaker) => speaker.fullName)).toEqual([
			"Second",
			"First",
		]);
		expect(component.isLoading).toBe(false);
		expect(component.hasError).toBe(false);
	});

	it("should flag an error when the request fails", () => {
		httpTesting
			.expectOne((request) => request.url.endsWith("/Speakers"))
			.error(new ProgressEvent("network error"));

		expect(component.hasError).toBe(true);
		expect(component.isLoading).toBe(false);
	});
});
