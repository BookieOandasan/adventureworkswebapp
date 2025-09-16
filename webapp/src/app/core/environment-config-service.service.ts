import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentConfigService {
  private environmentConfig: any;

  constructor() {
    const window = this.getWindow();

    if (window['environmentConfig']) {
      this.environmentConfig = window['environmentConfig'];
      console.log('Configuration loaded ', this.environmentConfig);
    } else {
      console.warn('No environmentConfig found in window object');
    }
  }

  private getWindow(): any {
    return window;
  }
  public get serviceBaseUrl() {
    return this.environmentConfig.serviceBaseUrl;
  }
}
