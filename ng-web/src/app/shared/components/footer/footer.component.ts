import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LucideAngularModule } from "lucide-angular";
import { NgKenyaPartners, ngKenyaShopUrl } from "src/app/const/data.const";

@Component({
	selector: "ng-ke-footer",
	templateUrl: "./footer.component.html",
	styleUrls: ["./footer.component.scss"],
	imports: [RouterModule, LucideAngularModule],
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
