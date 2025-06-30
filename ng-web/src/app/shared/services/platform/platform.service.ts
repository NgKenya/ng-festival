import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlatformService {
  constructor(
    @Inject(PLATFORM_ID)
    private platformId: Object
  ) {}

  isOnAngular(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  isOnServer(): boolean {
    return isPlatformServer(this.platformId);
  }
}
