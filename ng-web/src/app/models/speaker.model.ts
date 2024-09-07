export interface ISpeaker {
  name: string;
  lcp?: boolean;
  width?: number;
  height?: number;
  imageUrl: string;
  role: string;
  company: string;
  link?: string;
}

export interface ITalk {
  startTime: Date;
  icon?: string;
  endTime: Date;
  room?: ROOM_NAME.ROOM_1 | ROOM_NAME.ROOM_2 | ROOM_NAME.ROOM_3 | string;
  totalTime?: number;
  title: string;
  description?: string;
  speakers?: ISpeaker[];
  isDone?: boolean;
  slidesLink?: string;
  projectLink?: string;
}

export enum ROOM_NAME {
  ROOM_1 = 'Auditorium',
  ROOM_2 = 'Kigali',
  ROOM_3 = 'Co working Space',
}
