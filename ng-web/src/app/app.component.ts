import { CommonModule } from "@angular/common";
import {Component} from "@angular/core";
import { RouterModule } from "@angular/router";
import { NavbarComponent } from "./shared/components/navbar/navbar.component";
import { FooterComponent } from "./shared/components/footer/footer.component";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
	imports: [CommonModule, RouterModule, NavbarComponent, FooterComponent],
	standalone: true,
})
export class AppComponent {
	title = "ng-web";

}
