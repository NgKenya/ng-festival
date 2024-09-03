import { IPartner } from '../models/data.model';
import { ISpeaker, ITalk } from '../models/speaker.model';

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
export const SpeakerList: ISpeaker[] = [
  {
    name: 'Wycliffe Maina',
    imageUrl: 'assets/Images/speakers/maina-wycliffe.jpg',
    role: 'Angular Developer',
    company: 'All Things TypeScript',
  },
  {
    name: 'Christine Mukiri',
    imageUrl: 'assets/Images/speakers/christine-mukiri.jpg',
    role: 'Software Engineer',
    company: 'Software Developer',
  },
  {
    name: 'John Kamau',
    imageUrl: 'assets/Images/speakers/john-kamau.jpg',
    role: 'Software Developer',
    company: 'Full stack Developer',
  },
  {
    name: 'Karanja Chiuri',
    imageUrl: 'assets/Images/speakers/karanja-chiuri.jpg',
    role: 'Software Developer',
    company: 'Full stack Developer',
  },

  {
    name: 'Alex Muturi',
    imageUrl: 'assets/Images/speakers/job-alex-muturi.jpg',
    role: 'Frontend Engineer Lead',
    company: 'Kyosk',
  },

  {
    name: 'Ivy Walobwa',
    imageUrl: 'assets/Images/speakers/ivy-walobwa.jpg',
    role: 'Software Engineer',
    company: 'Software Company',
  },

  {
    name: 'Paul Chesa',
    imageUrl: 'assets/Images/speakers/paul_chesa.png',
    role: 'Software Engineer',
    company: 'elewa',
  },
  {
    name: 'Chris Achinga',
    imageUrl: 'assets/Images/speakers/chris-achinga.jpg',
    role: 'Software Engineer',
    company: 'Hackmamba Inc.',
  },
  {
    name: 'Joy Linda',
    imageUrl: 'assets/Images/speakers/joy_linda.png',
    role: 'Software Engineer',
    company: 'Software Developer',
  },
  {
    name: 'Wayne Gakuo',
    imageUrl: 'assets/Images/speakers/wayne.jpg',
    role: 'Frontend Engineer',
    company: 'Sky.Garden',
  },

  // {
  //   name: 'Winnie Mandela',
  //   imageUrl: 'assets/Images/speakers/madi.jpeg',
  //   role: 'Junior Quality Engineer',
  //   company: 'Peer Carbon',
  // },
];
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
