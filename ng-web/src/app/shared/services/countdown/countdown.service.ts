import { Injectable } from "@angular/core";
import { Observable, interval } from "rxjs";
import { takeWhile, map, startWith } from "rxjs/operators";

export interface IDate {
	month: number;
	day: number;
	hour: number;
	minute: number;
	second: number;
}

@Injectable({
	providedIn: "root",
})
export class CountdownService {
	constructor() {}

	startCountdown(targetDate: Date): Observable<IDate> {
		return interval(1000).pipe(
			startWith(0),
			map(() => {
				const now = new Date();
				const diff = targetDate.getTime() - now.getTime();
				return this.calculateRemainingTime(diff);
			}),
			takeWhile(() => !this.isEventOver(targetDate), true),
		);
	}

	calculateRemainingTime(totalMilliseconds: number): IDate {
		const millisecondsPerMonth = 1000 * 60 * 60 * 24 * 30;
		const millisecondsPerDay = 1000 * 60 * 60 * 24;
		const millisecondsPerHour = 1000 * 60 * 60;
		const millisecondsPerMinute = 1000 * 60;

		const months = Math.floor(totalMilliseconds / millisecondsPerMonth);
		let remainingMilliseconds = totalMilliseconds % millisecondsPerMonth;

		const days = Math.floor(remainingMilliseconds / millisecondsPerDay);
		remainingMilliseconds %= millisecondsPerDay;

		const hours = Math.floor(remainingMilliseconds / millisecondsPerHour);
		remainingMilliseconds %= millisecondsPerHour;

		const minutes = Math.floor(remainingMilliseconds / millisecondsPerMinute);
		remainingMilliseconds %= millisecondsPerMinute;

		const seconds = Math.floor(remainingMilliseconds / 1000);

		return {
			month: months,
			day: days,
			hour: hours,
			minute: minutes,
			second: seconds,
		};
	}

	isEventOver(targetDate: Date): boolean {
		return new Date() >= targetDate;
	}
}
