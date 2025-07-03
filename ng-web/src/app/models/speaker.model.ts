export interface ISpeaker {
	id: string;
	firstName: string;
	lastName: string;
	fullName: string;
	bio: string;
	tagLine: string;
	profilePicture: string;
	sessions: [
		{
			id: string;
			name: string;
		},
	];
	isTopSpeaker: boolean;
	links: [];
	questionAnswers: [];
	categories: [];
}

export interface ITalk {
	startTime: Date;
	icon?: string;
	endTime: Date;
	room?: ROOM_NAME.ROOM_1 | ROOM_NAME.ROOM_2 | ROOM_NAME.ROOM_3 | string;
	totalTime?: number;
	title: string;
	description?: string;
	speakers?: any[];
	isDone?: boolean;
	slidesLink?: string;
	projectLink?: string;
}

export enum ROOM_NAME {
	ROOM_1 = "Auditorium",
	ROOM_2 = "Kigali",
	ROOM_3 = "Co working Space",
}
