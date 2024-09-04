import { Component, inject } from '@angular/core';
import { sponsorhsip_Deck } from 'src/app/const/data.const';
import { UtilService } from 'src/app/services/util/util.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  utilServicce = inject(UtilService);
  deck = sponsorhsip_Deck;
  showMenu = false;
  isVisible: boolean = false;
  toggleNavbar() {
    this.showMenu = !this.showMenu;
  }

  navLinks: {
    label: string;
    link?: string;
    activeClass: string;
    fragment?: string;
  }[] = [
    {
      label: 'Home',
      link: '/home',
      activeClass: 'active',
    },
    {
      label: 'Speakers',
      link: '/speakers',
      activeClass: 'active',
    },
    {
      label: 'Agenda',
      link: '/schedule',
      activeClass: 'active',
    },
    {
      label: 'Contact Us',
      activeClass: 'active',
      link: '/contact',
    },
  ];
}
