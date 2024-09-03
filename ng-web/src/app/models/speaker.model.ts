export interface ISpeaker {
  name: string;
  lcp?: boolean;
  imageUrl: string;
  role: string;
  company: string;
}

export interface ITalk {
  startTime: Date;
  icon?: string;
  endTime?: Date;
  room?: ROOM_NAME.ROOM_1 | ROOM_NAME.ROOM_2 | ROOM_NAME.ROOM_3 | string;
  totalTime?: number;
  title: string;
  description?: string;
  speakers?: ISpeaker[];
}

export enum ROOM_NAME {
  ROOM_1 = 'Room 1',
  ROOM_2 = 'Room 2',
  ROOM_3 = 'Room 3',
}
