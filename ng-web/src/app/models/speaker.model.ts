export interface ISpeaker {
  name: string;
  imageUrl: string;
  role: string;
  company: string;
}

export interface ITalk {
  startTime: Date;
  icon?: string;
  endTime: Date;
  totalTime?: number;
  title: string;
  description?: string;
  speakers?: ISpeaker[];
}
