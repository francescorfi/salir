import {disableDeprecatedForms, provideForms} from '@angular/forms';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';

import {Salir} from './salir/components/salir';

bootstrap(Salir, [
  HTTP_PROVIDERS,
  disableDeprecatedForms(),
  provideForms()
]);
