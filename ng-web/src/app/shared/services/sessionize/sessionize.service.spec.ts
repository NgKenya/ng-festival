import { provideHttpClient } from "@angular/common/http";
import {
	HttpTestingController,
	provideHttpClientTesting,
} from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { SessionizeService } from "./sessionize.service";

describe("SessionizeService", () => {
	let service: SessionizeService;
	let httpTesting: HttpTestingController;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [provideHttpClient(), provideHttpClientTesting()],
		});

		service = TestBed.inject(SessionizeService);
		httpTesting = TestBed.inject(HttpTestingController);
	});

	afterEach(() => {
		httpTesting.verify();
	});

	it("should be created", () => {
		expect(service).toBeTruthy();
	});

	it("should request the speakers endpoint", () => {
		service.getAllSpeakers().subscribe();

		const request = httpTesting.expectOne((req) =>
			req.url.endsWith("/Speakers"),
		);
		expect(request.request.method).toBe("GET");
		request.flush([]);
	});

	it("should request the grid endpoint for the schedule", () => {
		service.getSchedhule().subscribe();

		const request = httpTesting.expectOne((req) =>
			req.url.endsWith("/GridSmart"),
		);
		expect(request.request.method).toBe("GET");
		request.flush([]);
	});
});
