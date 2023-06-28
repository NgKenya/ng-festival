import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  partners =  [
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
    },
    {
      official_website: "https://www.linkedin.com/company/technierschool/",
      logo: "assets/Images/logos/technier_logo.png",
      alt: "Technier School"
    }
  ]

  get provideFullYear(): number {
    const date: Date = new Date()
    return date.getFullYear();
  }

}
