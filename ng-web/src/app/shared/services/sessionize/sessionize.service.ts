import { HttpClient, HttpContext } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.development";

@Injectable({
	providedIn: "root",
})
export class SessionizeService {
	private readonly http = inject(HttpClient);

	constructor() {}

	getAllSpeakers(): Observable<any> {
		return this.http.get(`${environment.base_url}/Speakers`);
	}
}
