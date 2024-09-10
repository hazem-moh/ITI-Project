import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { routes } from './app.routes';

export const CONFIRMATION_EMAIL_TOKEN = 'your-secret-token';
export const FORGET_PASSWORD_TOKEN = 'your-forget-password-secret';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)
    ,provideRouter(routes),
    provideHttpClient()
  ]

};
