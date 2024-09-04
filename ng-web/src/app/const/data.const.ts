import { IPartner } from '../models/data.model';
import { ISpeaker, ITalk, ROOM_NAME } from '../models/speaker.model';

export const NgKenyaPartners: IPartner[] = [
  {
    official_website: 'https://google.com/',
    logo: 'assets/Images/logos/sponsors/google.png',
    alt: 'Google logo',
  },
  {
    official_website: 'https://angular.dev/',
    logo: 'assets/Images/logos/sponsors/angular_wordmark.png',
    alt: 'Angular',
  },
  {
    official_website: 'https://www.infobip.com',
    logo: 'assets/Images/logos/sponsors/infobip-logo.png',
    alt: 'Infobip',
  },
  {
    official_website: 'https://paydhq.com/',
    logo: 'assets/Images/logos/sponsors/payd.svg',
    alt: 'Payd',
  },
  {
    official_website: 'https://www.jetbrains.com/',
    logo: 'assets/Images/logos/sponsors/jetbrains-logo.png',
    alt: 'Jetbrains logo',
  },
];

export const ticketUrl = 'https://paydexp.com/ng-kenya-2024';
export const sponsorhsip_Deck =
  'https://docs.google.com/presentation/d/1UPa73RxOo3aJppY-QjkWCtMV6b14TvHn/edit?usp=sharing&ouid=104844680073323721667&rtpof=true&sd=true';
export const SpeakerList: ISpeaker[] = [
  {
    name: 'Wycliffe Maina',
    imageUrl: 'assets/Images/speakers/maina-wycliffe.jpg',
    role: 'The Typescript Aficionado',
    link: 'https://twitter.com/mwycliffe_dev',
    lcp: true,
    company: 'All Things TypeScript',
  },
  {
    name: 'Christine Mukiri',
    imageUrl: 'assets/Images/speakers/christine-mukiri.jpg',
    role: 'Full Stack Software Engineer',
    company: '',
  },
  {
    name: 'John Kamau',
    imageUrl: 'assets/Images/speakers/john-kamau.jpg',
    role: 'Full stack Developer',
    company: '',
  },
  {
    name: 'Karanja Chiuri',
    imageUrl: 'assets/Images/speakers/karanja-chiuri.jpg',
    role: 'Software Engineer',
    company: 'Eclectics International',
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
    company: 'Andela',
  },
  {
    name: 'Chris Achinga',
    imageUrl: 'assets/Images/speakers/chris-achinga.jpg',
    role: 'Software Engineer',
    company: 'Hackmamba Inc.',
  },
  {
    name: 'Rodgers Wanyonyi',
    imageUrl: 'assets/Images/speakers/Rodgers.jpg',
    role: 'Software Engineer',
    company: 'Software Company',
  },
  {
    name: 'Donattah Akinyi',
    imageUrl: 'assets/Images/speakers/donattah-akinyi.jpg',
    role: 'Frontend Developer',
    company: 'Carepay limited(MTIBA),',
  },

  {
    name: 'Paul Chesa',
    imageUrl: 'assets/Images/speakers/paul_chesa.png',
    role: 'Software Engineer',
    company: 'elewa',
  },

  {
    name: 'Joy Linda',
    imageUrl: 'assets/Images/speakers/joy_linda.png',
    role: 'Software Engineer',
    company: 'Angular Kenya',
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
    room: ROOM_NAME.ROOM_1,
  },
  {
    startTime: new Date('2024-09-07T09:00:00'),
    endTime: new Date('2024-09-07T09:10:00'),
    title: 'Opening Remarks & Angular Kenya Keynote',
    description: 'Opening remarks by the Angular Kenya team.',
    room: ROOM_NAME.ROOM_1,
    speakers: [
      {
        name: 'Angular Kenya',
        imageUrl: 'assets/Images/logos/sponsors/ng-kenya.png',
        role: 'Keynote Speaker',
        company: 'Angular Kenya',
      },
    ],
  },
  {
    startTime: new Date('2024-09-07T09:15:00'),
    endTime: new Date('2024-09-07T09:25:00'),
    title: "Partner's Keynote: Angular Team",
    description: 'Keynote presentation by the Angular Team.',
    room: ROOM_NAME.ROOM_1,
    speakers: [
      {
        name: 'Angular Team',
        imageUrl: 'assets/Images/logos/sponsors/angular.png',
        role: 'Keynote Speaker',
        company: 'Angular',
      },
    ],
  },
  {
    startTime: new Date('2024-09-07T09:30:00'),
    endTime: new Date('2024-09-07T09:40:00'),
    title: "Partner's Keynote: Infobip",
    description: 'Keynote presentation by Infobip.',
    room: ROOM_NAME.ROOM_1,
    speakers: [
      {
        name: 'Infobip',
        imageUrl: 'assets/Images/logos/sponsors/infobip-sch.png',
        role: 'Keynote Speaker',
        company: 'Infobip',
      },
    ],
  },
  {
    startTime: new Date('2024-09-07T09:45:00'),
    endTime: new Date('2024-09-07T09:55:00'),
    title: "Partner's Keynote: Payd",
    description: 'Keynote presentation by Payd.',
    room: ROOM_NAME.ROOM_1,
    speakers: [
      {
        name: 'Payd',
        imageUrl: 'assets/Images/logos/sponsors/payd-sch.png',
        role: 'Keynote Speaker',
        company: 'Payd',
      },
    ],
  },
  {
    startTime: new Date('2024-09-07T10:00:00'),
    endTime: new Date('2024-09-07T10:30:00'),
    title: 'The Angular Renaissance - Adopting the New Angular Way',
    description: 'Technical keynote by Wycliffe Maina.',
    room: ROOM_NAME.ROOM_1,
    speakers: [
      {
        name: 'Wycliffe Maina',
        imageUrl: 'assets/Images/speakers/maina-wycliffe.jpg',
        role: 'The Typescript Aficionado',
        company: 'All Things Typescript',
      },
    ],
  },
  {
    startTime: new Date('2024-09-07T10:35:00'),
    endTime: new Date('2024-09-07T11:05:00'),
    title: 'Angular Developer Experience  Over The years',
    description: 'Technical keynote by Rodgers Wanyonyi.',
    room: ROOM_NAME.ROOM_1,
    speakers: [
      {
        name: 'Rodgers Wanyonyi',
        imageUrl: 'assets/Images/speakers/Rodgers.jpg',
        role: 'Software Engineer',
        company: 'Software Company',
      },
    ],
  },
  {
    startTime: new Date('2024-09-07T11:10:00'),
    endTime: new Date('2024-09-07T11:30:00'),
    title: 'Q&A Panel with Maina & Rodgers Wanyonyi',
    description: 'Q&A session with Wycliffe Maina and Rodgers Wanyonyi.',
    room: ROOM_NAME.ROOM_1,
    speakers: [
      {
        name: 'Wycliffe Maina',
        imageUrl: 'assets/Images/speakers/maina-wycliffe.jpg',
        role: 'The Typescript Aficionado',
        company: 'All Things Typescript',
      },
      {
        name: 'Rodgers Wanyonyi',
        imageUrl: 'assets/Images/speakers/Rodgers.jpg',
        role: 'Speaker',
        company: '',
      },
    ],
  },
  {
    startTime: new Date('2024-09-07T11:40:00'),
    endTime: new Date('2024-09-07T12:10:00'),
    title: 'Breakout Room One',
  },
  {
    startTime: new Date('2024-09-07T11:40:00'),
    endTime: new Date('2024-09-07T12:10:00'),
    title:
      'Mastering Strongly Typed Reactive Forms in Angular: A Hands-On Workshop',
    description:
      'A hands-on workshop on mastering strongly typed reactive forms in Angular.',
    room: ROOM_NAME.ROOM_1,
    speakers: [
      {
        name: 'Donattah Akinyi',
        imageUrl: 'assets/Images/speakers/donattah-akinyi.jpg',
        role: 'Frontend Developer',
        company: 'Carepay limited(MTIBA),',
      },
    ],
  },
  {
    startTime: new Date('2024-09-07T11:40:00'),
    endTime: new Date('2024-09-07T12:10:00'),
    title:
      'Seamless Real-Time Updates in Angular with Firebase Cloud Messaging',
    description:
      'Learn how to implement real-time updates in Angular using Firebase Cloud Messaging.',
    room: ROOM_NAME.ROOM_2,
    speakers: [
      {
        name: 'John Kamau',
        imageUrl: 'assets/Images/speakers/john-kamau.jpg',
        role: 'Full Stack Developer',
        company: '',
      },
    ],
  },
  {
    startTime: new Date('2024-09-07T11:40:00'),
    endTime: new Date('2024-09-07T12:10:00'),
    title:
      'Using Custom Observer Pattern and Feature Flags/Feature Toggles in an Angular App',
    description:
      'Learn about implementing custom observer patterns and feature flags in Angular applications.',
    room: ROOM_NAME.ROOM_3,
    speakers: [
      {
        name: 'Alex Muturi',
        imageUrl: 'assets/Images/speakers/job-alex-muturi.jpg',
        role: 'Workshop Leader',
        company: '',
      },
    ],
  },
  {
    startTime: new Date('2024-09-07T12:20:00'),
    // endTime: new Date('2024-09-07T12:50:00'),
    title: 'Breakout Session 2',
  },
  {
    startTime: new Date('2024-09-07T12:20:00'),
    endTime: new Date('2024-09-07T12:50:00'),
    title: 'Speed At Scale: Instantly is Better than Fast?',
    description: 'A session exploring speed optimization techniques at scale.',
    room: ROOM_NAME.ROOM_1,
    speakers: [
      {
        name: 'Chris Achinga',
        imageUrl: 'assets/Images/speakers/chris-achinga.jpg',
        role: 'Speaker',
        company: '',
      },
    ],
  },
  {
    startTime: new Date('2024-09-07T12:20:00'),
    endTime: new Date('2024-09-07T12:50:00'),
    title:
      'Streamlining Component Rendering in Angular: Harnessing the Power of Deferrable Views',
    description:
      'A session on optimizing component rendering using deferrable views in Angular.',
    room: ROOM_NAME.ROOM_2,
    speakers: [
      {
        name: 'Paul Chesa',
        imageUrl: 'assets/Images/speakers/paul_chesa.png',
        role: 'Senior Software Engineer',
        company: '',
      },
      {
        name: 'Joy Linda',
        imageUrl: 'assets/Images/speakers/joy_linda.png',
        role: 'Software Engineer',
        company: 'Angular-Kenya',
      },
    ],
  },
  {
    startTime: new Date('2024-09-07T12:20:00'),
    endTime: new Date('2024-09-07T12:50:00'),
    title: 'Testing and Maintaining Design Systems with Storybook',
    room: ROOM_NAME.ROOM_3,
    description:
      'A session on testing and maintaining design systems effectively using Storybook.',
    speakers: [
      {
        name: 'Ivy Walobwa',
        imageUrl: 'assets/Images/speakers/ivy-walobwa.jpg',
        role: 'Software Engineer',
        company: 'Andela',
      },
    ],
  },
  {
    startTime: new Date('2024-09-07T13:00:00'),
    endTime: new Date('2024-09-07T13:15:00'),
    title: 'Group Photo',
    room: 'Terrace',
  },
  {
    startTime: new Date('2024-09-07T13:15:00'),
    endTime: new Date('2024-09-07T14:00:00'),
    title: 'Lunch',
    description: 'Lunch break for all participants.',
    room: 'Terrace',
    speakers: [],
  },
  {
    startTime: new Date('2024-09-07T14:10:00'),
    endTime: new Date('2024-09-07T14:50:00'),
    title: 'Breakout Sessions 3',
  },

  {
    startTime: new Date('2024-09-07T14:10:00'),
    endTime: new Date('2024-09-07T14:50:00'),
    title: 'Fundamentals of State Management: The Signal Store',
    description:
      'An introduction to state management using the Signal Store in Angular.',
    room: ROOM_NAME.ROOM_1,
    speakers: [
      {
        name: 'Christine Mukiri',
        imageUrl: 'assets/Images/speakers/christine-mukiri.jpg',
        role: 'Full Stack  Software Engineer',
        company: 'Freelance',
      },
    ],
  },
  {
    startTime: new Date('2024-09-07T14:10:00'),
    endTime: new Date('2024-09-07T14:50:00'),
    title: 'Transclusion in Angular',
    description:
      'An in-depth session on transclusion in Angular and its use cases.',
    room: ROOM_NAME.ROOM_2,
    speakers: [
      {
        name: 'Karanja Chiuri',
        imageUrl: 'assets/Images/speakers/karanja-chiuri.jpg',
        role: 'Software Engineer',
        company: 'Eclectics International',
      },
    ],
  },
  {
    startTime: new Date('2024-09-07T15:00:00'),
    endTime: new Date('2024-09-07T15:10:00'),
    title: 'Panel Build-up',
    description: "Let's break the ice",
    speakers: [],
  },
  {
    startTime: new Date('2024-09-07T15:10:00'),
    endTime: new Date('2024-09-07T15:50:00'),
    title: "Angular Upgrade: A Hero's Adventure to a Brighter Future.",
    description: 'A panel discussion',
    speakers: [],
  },
  {
    startTime: new Date('2024-09-07T16:00:00'),
    endTime: new Date('2024-09-07T16:30:00'),
    title: 'Evening Tea',
    description:
      'Closing remarks, networking session, and tea/coffee with snacks.',
    speakers: [],
  },
];
