import { HttpClient } from "@angular/common/http";
import { inject, Service } from "@angular/core";
import { Observable } from "rxjs";
import { ISessionizeGrid, ISpeaker } from "src/app/models/speaker.model";
import { environment } from "src/environments/environment";

@Service()
export class SessionizeService {
	private readonly http = inject(HttpClient);

	getAllSpeakers(baseUrl = environment.base_url): Observable<ISpeaker[]> {
		return this.http.get<ISpeaker[]>(`${baseUrl}/Speakers`);
	}

	getAllSpeakersProfile(baseUrl = environment.base_url): Observable<ISpeaker[]> {
		return this.http.get<ISpeaker[]>(`${baseUrl}/Speakers`);
	}

	getSchedhule(baseUrl = environment.base_url): Observable<ISessionizeGrid[]> {
		return this.http.get<ISessionizeGrid[]>(`${baseUrl}/GridSmart`);
	}
}
