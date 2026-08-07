import { Component, Input } from "@angular/core";
import { LucideAngularModule } from "lucide-angular";
import { ISpeaker, ISpeakerLink } from "src/app/models/speaker.model";

@Component({
	selector: "ng-ke-speaker-card",
	templateUrl: "./speaker-card.component.html",
	styleUrls: ["./speaker-card.component.scss"],
	imports: [LucideAngularModule],
	standalone: true,
})
export class SpeakerCardComponent {
	@Input() speaker!: ISpeaker;

	/** Maps a Sessionize link type to a matching Lucide icon name. */
	getLinkIcon(link: ISpeakerLink): string {
		const type = (link.linkType || link.title || "").toLowerCase();

		if (type.includes("linkedin")) return "linkedin";
		if (type.includes("twitter") || type.includes("x")) return "twitter";
		return "globe";
	}
}
