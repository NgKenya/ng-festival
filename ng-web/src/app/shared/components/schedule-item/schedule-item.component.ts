import {
	CommonModule,
	DatePipe,
	JsonPipe,
	NgClass,
	NgOptimizedImage,
} from "@angular/common";
import { Component, inject, Input } from "@angular/core";
import { LucideAngularComponent, LucideAngularModule } from "lucide-angular";
import { ISession, ITalk, ITimeslot } from "src/app/models/speaker.model";
import { UtilService } from "../../services/util/util.service";

@Component({
	selector: "ng-ke-schedule-item",
	imports: [LucideAngularModule, DatePipe, NgClass],
	templateUrl: "./schedule-item.component.html",
	styleUrl: "./schedule-item.component.scss",
	standalone: true,
})
export class SchedhuleItemComponent {
	@Input() session!: ISession;

	@Input() room!: string;
	utilService = inject(UtilService);
}
