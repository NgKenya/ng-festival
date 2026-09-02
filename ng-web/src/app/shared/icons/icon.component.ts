import {
	ChangeDetectionStrategy,
	Component,
	ElementRef,
	Renderer2,
	computed,
	effect,
	inject,
	input,
} from "@angular/core";
import { ICON_REGISTRY } from "./icon-registry";

/**
 * Renders a registered icon onto the host `<svg>` element.
 *
 * Icon shapes are arbitrary `[tag, attributes]` pairs, which no fixed template
 * can express, so the children are created imperatively. The shapes come from
 * the bundled icon registry rather than user input, so there is nothing to
 * sanitise here.
 */
@Component({
	selector: "svg[ngKeIcon]",
	template: "",
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 24 24",
		width: "24",
		height: "24",
		fill: "none",
		stroke: "currentColor",
		"stroke-width": "2",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"aria-hidden": "true",
		"[class]": "iconClass()",
	},
})
export class IconComponent {
	/** Kebab-case name of a registered icon, e.g. `map-pin`. */
	readonly ngKeIcon = input.required<string>();

	private readonly registry = inject(ICON_REGISTRY);
	private readonly host = inject<ElementRef<SVGSVGElement>>(ElementRef);
	private readonly renderer = inject(Renderer2);

	protected readonly iconClass = computed(() => `lucide-${this.ngKeIcon()}`);

	private readonly shape = computed(() => this.registry[this.ngKeIcon()] ?? []);

	constructor() {
		effect(() => {
			const svg = this.host.nativeElement;
			svg.replaceChildren();

			for (const [tag, attributes] of this.shape()) {
				const child = this.renderer.createElement(tag, "svg");
				for (const [name, value] of Object.entries(attributes)) {
					if (value !== undefined) {
						this.renderer.setAttribute(child, name, String(value));
					}
				}
				this.renderer.appendChild(svg, child);
			}
		});
	}
}
