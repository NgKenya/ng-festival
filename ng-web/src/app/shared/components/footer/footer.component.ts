import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NgKenyaPartners, ngKenyaShopUrl } from "src/app/const/data.const";
import { IconComponent } from "../../icons/icon.component";

@Component({
	selector: "ng-ke-footer",
	templateUrl: "./footer.component.html",
	styleUrls: ["./footer.component.scss"],
	imports: [RouterModule, IconComponent],
	standalone: true,
})
export class FooterComponent {
	partners = NgKenyaPartners;
	shopUrl = ngKenyaShopUrl;

	get provideFullYear(): number {
		const date: Date = new Date();
		return date.getFullYear();
	}
}
