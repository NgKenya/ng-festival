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

export interface ISpeakerProfile {
	id: string;
	profilePicture: string;
	role: string;
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

export interface ISession {
	id: string;
	title: string;
	description: boolean;
	startsAt: string;
	endsAt: string;
	isServiceSession: true;
	isPlenumSession: false;
	speakers: {
		id: string;
		name: string;
		profilePicture: string;
		role: string;
	}[];
	categories: [];
	roomId: number;
	room: string;
	liveUrl: string | null;
	recordingUrl: string | null;
	status: boolean | null;
	isInformed: boolean;
	isConfirmed: boolean;
	done: boolean;
}

export interface ISessionRoom {
	id: number;
	name: string;
	session: ISession;
	index: number;
}
export interface ITimeslot {
	slotStart: string;
	rooms: ISessionRoom[];
}
export interface ISessionizeGrid {
	date: string;
	isDefault: boolean;
	rooms: [];
	timeSlots: ITimeslot[];
}

export enum ROOM_NAME {
	ROOM_1 = "Auditorium",
	ROOM_2 = "Kigali",
	ROOM_3 = "Co working Space",
}
