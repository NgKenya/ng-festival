export type PastEventDay = {
	label: string;
	date: string;
};

export type PastEvent = {
	year: number;
	theme: string;
	datesLabel: string;
	venue: string;
	photosUrl: string;
	sessionizeBaseUrl: string;
	days: PastEventDay[];
	summary: string;
};
