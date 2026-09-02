
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NavbarComponent } from "./shared/components/navbar/navbar.component";
import { FooterComponent } from "./shared/components/footer/footer.component";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
	imports: [RouterOutlet, NavbarComponent, FooterComponent],
	changeDetection: ChangeDetectionStrategy.Eager,
})
export class AppComponent {
	title = "ng-web";

}
