import { HttpClient, HttpContext } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import {
	ISessionizeGrid,
	ISpeaker,
	ISpeakerProfile,
} from "src/app/models/speaker.model";
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

	getAllSpeakersProfile(): Observable<ISpeaker[]> {
		return this.http.get<ISpeaker[]>(`${environment.base_url}/Speakers`);
	}

	getSchedhule(): Observable<ISessionizeGrid[]> {
		return this.http.get<ISessionizeGrid[]>(
			`${environment.base_url}/GridSmart`,
		);
	}
}
