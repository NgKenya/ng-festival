import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { ISpeaker, ISpeakerLink } from "src/app/models/speaker.model";
import { IconComponent } from "../../icons/icon.component";

@Component({
	selector: "ng-ke-speaker-card",
	templateUrl: "./speaker-card.component.html",
	styleUrls: ["./speaker-card.component.scss"],
	imports: [IconComponent],
	changeDetection: ChangeDetectionStrategy.Eager,
	standalone: true,
})
export class SpeakerCardComponent {
	@Input() speaker!: ISpeaker;

	/** Maps a Sessionize link type to a matching Lucide icon name. */
	getLinkIcon(link: ISpeakerLink): string {
		const type = (link.linkType || link.title || "").toLowerCase();

		if (type.includes("linkedin")) return "linkedin";
		if (type.includes("twitter") || type.includes("x")) return "x-twitter";
		return "globe";
	}
}
