import { HttpClient } from "@angular/common/http";
import { inject, Service } from "@angular/core";
import { Observable } from "rxjs";
import { ISessionizeGrid, ISpeaker } from "src/app/models/speaker.model";
import { environment } from "src/environments/environment";

@Service()
export class SessionizeService {
	private readonly http = inject(HttpClient);

	getAllSpeakers(): Observable<ISpeaker[]> {
		return this.http.get<ISpeaker[]>(`${environment.base_url}/Speakers`);
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
