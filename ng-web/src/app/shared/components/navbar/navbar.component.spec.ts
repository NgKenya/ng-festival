import { ComponentFixture, TestBed } from "@angular/core/testing";
import { provideRouter } from "@angular/router";
import { NavbarComponent } from "./navbar.component";

describe("NavbarComponent", () => {
	let component: NavbarComponent;
	let fixture: ComponentFixture<NavbarComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [NavbarComponent],
			providers: [provideRouter([])],
		}).compileComponents();

		fixture = TestBed.createComponent(NavbarComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});

	it("should render a link for every nav entry", () => {
		const links = (fixture.nativeElement as HTMLElement).querySelectorAll(
			"nav a[href]",
		);
		expect(links.length).toBeGreaterThanOrEqual(component.navLinks().length);
	});

	it("should toggle the mobile menu", () => {
		expect(component.showMenu).toBe(false);

		component.toggleNavbar();
		expect(component.showMenu).toBe(true);

		component.toggleNavbar();
		expect(component.showMenu).toBe(false);
	});
});
