import { IPartner } from '../models/data.model';
import { ITalk } from '../models/speaker.model';

export const NgKenyaPartners: IPartner[] = [
  {
    official_website: 'https://google.com/',
    logo: 'assets/Images/logos/sponsors/google.png',
    alt: 'Google logo',
  },
  {
    official_website: 'https://propel.community/',
    logo: 'assets/Images/logos/sponsors/propel_logo.png',
    alt: 'Propel logo',
  },
  {
    official_website: 'https://www.jetbrains.com/',
    logo: 'assets/Images/logos/sponsors/cloudinary.png',
    alt: 'Cloudinary logo',
  },
];

export const ticketUrl = 'https://paydexp.com/ng-kenya-2024';

export const TalkList: ITalk[] = [
  {
    startTime: new Date('2024-09-07T08:00:00'),
    endTime: new Date('2024-09-07T08:55:00'),
    title: 'Arrival & Registration',
  },
  {
    startTime: new Date('2024-09-07T09:00:00'),
    endTime: new Date('2024-09-07T09:10:00'),
    title: 'Opening Remarks',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus necessitatibus nulla at minima explicabo voluptates?',
    speakers: [
      {
        name: 'Angular Kenya',
        imageUrl: 'assets/Images/logos/sponsors/cloudinary.png',
        role: 'Angular Kenya',
        company: 'Angular Kenya',
      },
    ],
  },
  {
    startTime: new Date('2024-09-07T09:00:00'),
    endTime: new Date('2024-09-07T09:10:00'),
    title: 'Opening Remarks',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus necessitatibus nulla at minima explicabo voluptates?',
    speakers: [
      {
        name: 'Angular Kenya',
        imageUrl: 'assets/Images/logos/sponsors/cloudinary.png',
        role: 'Angular Kenya',
        company: 'Angular Kenya',
      },
    ],
  },
];
