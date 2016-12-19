import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic([
  { provide: 'backendPath', useValue: environment.backendPath },
  { provide: 'backendDateFormat', useValue: 'YYYY-MM-DD' },
  { provide: 'backendTimeFormat', useValue: 'HH:mm' },
  { provide: 'backendDateTimeFormat', useValue: 'YYYY-MM-DDTHH:mm' },
  { provide: 'defaultDateFormat', useValue: 'DD.MM.YYYY' },
  { provide: 'defaultTimeFormat', useValue: 'hh:mm A' },
  { provide: 'defaultDateTimeFormat', useValue: 'DD.MM.YYYY hh:mm A' }
]).bootstrapModule(AppModule);
