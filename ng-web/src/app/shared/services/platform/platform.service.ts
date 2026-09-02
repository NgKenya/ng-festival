import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { PLATFORM_ID, inject, Service } from '@angular/core';

@Service()
export class PlatformService {
	private platformId = inject(PLATFORM_ID);

	isOnAngular(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  isOnServer(): boolean {
    return isPlatformServer(this.platformId);
  }
}
