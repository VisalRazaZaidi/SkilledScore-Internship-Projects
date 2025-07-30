import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
// import { provideZoneChangeDetection } from '@angular/core';
import { App } from './app/app';

bootstrapApplication(App, {
  providers: [
    provideHttpClient(),
    // provideZoneChangeDetection() // <-- Zoneless mode!
  ]
})
  .catch((err) => console.error(err));
