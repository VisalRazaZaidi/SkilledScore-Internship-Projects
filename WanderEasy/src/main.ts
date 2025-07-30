import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideZoneChangeDetection } from '@angular/core'; // <-- Add this import
import { App } from './app/app';

bootstrapApplication(App, {
  providers: [
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: false }) // <-- Updated to use correct NgZoneOptions
  ]
})
  .catch((err) => console.error(err));
