export interface ISpeaker {
  name: string;
  imageUrl: string;
  role: string;
  company: string;
}

export interface ITalk {
  startTime: string;
  endTime: string;
  title: string;
  description: string;
  speaker: ISpeaker[];
}
