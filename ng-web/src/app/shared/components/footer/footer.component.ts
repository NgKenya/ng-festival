import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import {
	NgKenyaPartners,
	ngKenyaLogo,
	ngKenyaShopUrl,
} from "src/app/const/data.const";
import { IconComponent } from "../../icons/icon.component";

@Component({
	selector: "ng-ke-footer",
	templateUrl: "./footer.component.html",
	styleUrls: ["./footer.component.scss"],
	imports: [RouterLink, IconComponent],
	changeDetection: ChangeDetectionStrategy.Eager,
})
export class FooterComponent {
	partners = NgKenyaPartners;
	shopUrl = ngKenyaShopUrl;
	logo = ngKenyaLogo;

	get provideFullYear(): number {
		const date: Date = new Date();
		return date.getFullYear();
	}
}
