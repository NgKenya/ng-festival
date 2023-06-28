import { Component } from '@angular/core';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.scss']
})
export class SpeakersComponent {

  speakers = [
    {
      name: 'Allela Eunice',
      imageUrl: 'assets/Images/speakers/allela.jpg',
      talkTitle: 'Google Keynote',
      company: 'Google'
    },
    {
      name: 'Paul Chesa',
      imageUrl: 'assets/Images/speakers/paul_chesa.png',
      talkTitle: 'Serverless Architecture Overview',
      company: 'elewa'
    },
    {
      name: 'Dhananjay Kumar',
      imageUrl: 'assets/Images/speakers/dhananjay.jpg',
      talkTitle: 'Signals – a new way of Fine-Grained Reactivity in Angular',
      company: 'ng-India'
    },
    {
      name: 'Wycliffe Maina',
      imageUrl: 'assets/Images/speakers/wycliffe_maina.jpg',
      talkTitle: 'The State of Angular',
      company: 'All Things TypeScript'
    },
    {
      name: 'Winnie Mandela',
      imageUrl: 'assets/Images/speakers/madi.jpeg',
      talkTitle: 'Navigating the Angular Way: A Comprehensive Guide to Routing in Angular',
      company: 'Angular Kenya'
    },
    {
      name: 'Wayne Gakuo',
      imageUrl: 'assets/Images/speakers/wayne.jpg',
      talkTitle: 'The State of Angular',
      company: 'Sky.Garden'
    },
    {
      name: 'Chris Achinga',
      imageUrl: 'assets/Images/speakers/chris_achinga.jpg',
      talkTitle: 'Build a PWA with Angular',
      company: 'Hackmamba Inc.'
    },
    {
      name: 'Joy Linda',
      imageUrl: 'assets/Images/speakers/joy_linda.png',
      talkTitle: 'Mastering Asynchronous Programming: Promises and Observables',
      company: 'Software Developer'
    },
    {
      name: 'Alex Muturi',
      imageUrl: 'assets/Images/speakers/alex_muturi.jpg',
      talkTitle: 'Add feature flags / feature toggle to an Angular app',
      company: 'Kyosk'
    },
    {
      name: 'John Kamau',
      imageUrl: 'assets/Images/speakers/john_kamau.jpg',
      talkTitle: 'Angular in the enterprise: Exploring how Angular is used in enterprise applications - scalability, security, and maintainability.',
      company: 'Full stack Developer'
    },
    {
      name: 'Brian Ouma',
      imageUrl: 'assets/Images/speakers/brian.JPG',
      talkTitle: 'Http Interceptors And How to Use Them In Angular',
      company: 'ICEA Lion Group'
    },
    {
      name: 'Edwin Maye',
      imageUrl: 'assets/Images/speakers/maye.jpg',
      talkTitle: 'Angular in the enterprise: Exploring how Angular is used in enterprise applications - scalability, security, and maintainability.',
      company: 'Taxually/Kyosk'
    }
  ]
}
