import { Component, Input } from "@angular/core";
import { ISpeaker } from "src/app/models/speaker.model";

@Component({
	selector: "ng-ke-speaker-card",
	templateUrl: "./speaker-card.component.html",
	styleUrls: ["./speaker-card.component.scss"],
	standalone: true,
})
export class SpeakerCardComponent {
	@Input() speaker!: ISpeaker;
}
