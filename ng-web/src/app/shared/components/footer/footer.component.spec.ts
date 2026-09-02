import { ComponentFixture, TestBed } from "@angular/core/testing";
import { provideRouter } from "@angular/router";
import { FooterComponent } from "./footer.component";

describe("FooterComponent", () => {
	let component: FooterComponent;
	let fixture: ComponentFixture<FooterComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [FooterComponent],
			providers: [provideRouter([])],
		}).compileComponents();

		fixture = TestBed.createComponent(FooterComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});

	it("should show the current year in the copyright notice", () => {
		expect(component.provideFullYear).toBe(new Date().getFullYear());
		expect((fixture.nativeElement as HTMLElement).textContent).toContain(
			String(new Date().getFullYear()),
		);
	});
});
