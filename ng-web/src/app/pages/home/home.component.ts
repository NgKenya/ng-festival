import { Component } from "@angular/core";
import { CounterComponent } from "../../shared/components/counter/counter.component";
import { LucideAngularModule } from "lucide-angular";
import { eventStats } from "src/app/const/data.const";

@Component({
	selector: "ng-ke-home",
	imports: [CounterComponent, LucideAngularModule],
	standalone: true,
	templateUrl: "./home.component.html",
	styleUrl: "./home.component.scss",
})
export class HomeComponent {
	showVideo = false;
	stats = eventStats;

	openVideo() {
		this.showVideo = true;
	}

	closeVideo() {
		this.showVideo = false;
	}
}
