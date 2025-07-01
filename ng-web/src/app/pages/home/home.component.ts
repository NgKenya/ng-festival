import { Component } from "@angular/core";
import { CounterComponent } from "../../shared/components/counter/counter.component";

@Component({
	selector: "ng-ke-home",
	imports: [CounterComponent],
	standalone: true,
	templateUrl: "./home.component.html",
	styleUrl: "./home.component.scss",
})
export class HomeComponent {}
