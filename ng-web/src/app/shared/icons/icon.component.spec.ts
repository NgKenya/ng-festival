import { Component, signal } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { IconComponent } from "./icon.component";
import { provideIcons } from "./icon-registry";

@Component({
	imports: [IconComponent],
	template: `<svg [ngKeIcon]="name()"></svg>`,
})
class HostComponent {
	readonly name = signal("clock");
}

describe("IconComponent", () => {
	let fixture: ComponentFixture<HostComponent>;

	function icon(): SVGSVGElement {
		return (fixture.nativeElement as HTMLElement).querySelector("svg")!;
	}

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [HostComponent],
			providers: [
				provideIcons({
					clock: [
						["circle", { cx: 12, cy: 12, r: 10 }],
						["path", { d: "M12 6v6l4 2" }],
					],
					star: [["path", { d: "M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" }]],
				}),
			],
		}).compileComponents();

		fixture = TestBed.createComponent(HostComponent);
		fixture.detectChanges();
	});

	it("should render the registered shape as SVG children", () => {
		const children = Array.from(icon().children);

		expect(children.map((child) => child.tagName)).toEqual(["circle", "path"]);
		expect(children[0].getAttribute("r")).toBe("10");
		expect(children[1].getAttribute("d")).toBe("M12 6v6l4 2");
	});

	it("should expose the icon name as a class for styling hooks", () => {
		expect(icon().getAttribute("class")).toContain("lucide-clock");
	});

	it("should swap the shape when the name changes", () => {
		fixture.componentInstance.name.set("star");
		fixture.detectChanges();

		expect(Array.from(icon().children)).toHaveLength(1);
		expect(icon().getAttribute("class")).toContain("lucide-star");
	});

	it("should render nothing for an unregistered name", () => {
		fixture.componentInstance.name.set("not-an-icon");
		fixture.detectChanges();

		expect(icon().children).toHaveLength(0);
	});
});
