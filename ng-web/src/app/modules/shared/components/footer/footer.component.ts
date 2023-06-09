import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  partners =  [
    {
      official_website: "https://ihub.co.ke/",
      logo: "assets/Images/logos/ihub-logo.png",
      alt: "iHub Logo"
    },
    {
      official_website: "https://cloudinary.com/",
      logo: "assets/Images/logos/cloudinary-logo.png",
      alt: "Cloudinary logo"
    },
    {
      official_website: "https://google.com/",
      logo: "assets/Images/logos/google2.0 1.png",
      alt: "Google logo"
    },
    {
      official_website: "https://propel.community/",
      logo: "assets/Images/logos/Propel Logo Black.png",
      alt: "Propel logo"
    },
    {
      official_website: "https://www.jetbrains.com/",
      logo: "assets/Images/logos/jb_beam.svg",
      alt: "Jetbrains logo"
    }
  ]

  get provideFullYear(): number {
    const date: Date = new Date()
    return date.getFullYear();
  }

}
