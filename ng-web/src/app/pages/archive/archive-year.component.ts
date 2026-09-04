import {
	ChangeDetectionStrategy,
	Component,
	computed,
	inject,
} from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { map } from "rxjs";
import {
	getPastEvent,
	hasFullArchive,
} from "src/app/const/events.const";
import { IconComponent } from "src/app/shared/icons/icon.component";
import { UtilService } from "src/app/shared/services/util/util.service";

@Component({
	selector: "ng-ke-archive-year",
	imports: [RouterLink, IconComponent],
	templateUrl: "./archive-year.component.html",
	changeDetection: ChangeDetectionStrategy.Eager,
})
export class ArchiveYearComponent {
	private route = inject(ActivatedRoute);
	private utilService = inject(UtilService);

	private readonly yearParam = toSignal(
		this.route.paramMap.pipe(map((params) => Number(params.get("year")))),
		{ initialValue: Number(this.route.snapshot.paramMap.get("year")) },
	);

	readonly event = computed(() => getPastEvent(this.yearParam()));

	readonly canBrowseSessions = computed(() => {
		const event = this.event();
		return event ? hasFullArchive(event) : false;
	});

	viewPhotos(): void {
		const photosUrl = this.event()?.photosUrl;
		if (photosUrl) {
			this.utilService.openNewPage(photosUrl);
		}
	}
}
