import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

import { AppComponent } from './app/app.component';
import { routes }       from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(),      // puxe BrowserModule etc, se necessário
    provideRouter(routes)       // registra as rotas
  ]
})
  .catch(err => console.error(err));
