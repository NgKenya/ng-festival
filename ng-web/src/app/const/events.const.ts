import { PastEvent } from "../models/event.model";

/** Upcoming conference year shown on the live homepage. */
export const CURRENT_EVENT_YEAR = 2027;

/**
 * Archived conferences. Newest first.
 * Speakers/agenda for a year require a Sessionize base URL.
 */
export const PAST_EVENTS: PastEvent[] = [
	{
		year: 2026,
		theme: "NG-ine Room",
		datesLabel: "August 21 & 22, 2026",
		venue: "iHub, Nairobi",
		photosUrl: "https://photos.app.goo.gl/kMCEqst21musURLR6",
		sessionizeBaseUrl: "https://sessionize.com/api/v2/b0phmel0/view",
		days: [
			{ label: "Day One", date: "August 21,2026" },
			{ label: "Day Two", date: "August 22,2026" },
		],
		summary:
			"Where Angular met its superpowers — tools, platforms, and workflows that power modern apps.",
	},
	{
		year: 2025,
		theme: "NG Kenya 2025",
		datesLabel: "July 4 & 5, 2025",
		venue: "Nairobi, Kenya",
		photosUrl: "https://photos.app.goo.gl/rxDqdeM5tbLq6nv89",
		sessionizeBaseUrl: "",
		days: [],
		summary: "Another year of community, talks, and Angular energy in Nairobi.",
	},
	{
		year: 2024,
		theme: "NG Kenya 2024",
		datesLabel: "September 7, 2024",
		venue: "Nairobi, Kenya",
		photosUrl: "https://photos.app.goo.gl/UHZCwSEV2JkMzbYw7",
		sessionizeBaseUrl: "",
		days: [],
		summary: "The early chapters of NG Kenya — building the Angular community together.",
	},
];

export function getPastEvent(year: number): PastEvent | undefined {
	return PAST_EVENTS.find((event) => event.year === year);
}

export function hasFullArchive(event: PastEvent): boolean {
	return Boolean(event.sessionizeBaseUrl);
}
