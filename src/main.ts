import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { Mainmodule } from './CustomerApp/CustomerApp.Mainmodule';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(Mainmodule)
  .catch(err => console.error(err));
