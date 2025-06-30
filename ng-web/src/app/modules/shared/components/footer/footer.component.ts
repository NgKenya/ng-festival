import { Component } from '@angular/core';
import { NgKenyaPartners } from 'src/app/const/data.const';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    standalone: false
})
export class FooterComponent {
  partners = NgKenyaPartners;

  get provideFullYear(): number {
    const date: Date = new Date();
    return date.getFullYear();
  }
}
