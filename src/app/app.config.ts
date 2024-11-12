import { ApplicationConfig, provideZoneChangeDetection, isDevMode, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

//Routing
import { routes } from './app.routes';

//Input
import { FormsModule } from '@angular/forms';

//HttpClient
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

//Global State Management
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { appStore } from '../ngrx-store/store';
import { ToDoService } from '../ngrx-store/todo/service';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

//Material
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),

    //Routing
    provideRouter(routes),
    provideClientHydration(),

    //Input
    importProvidersFrom(FormsModule),

    //HttpClient
    provideHttpClient(),

    //Global State Management
    provideStore(appStore),     
    provideEffects(),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    ToDoService, provideAnimationsAsync(),

    //Angular Material
    importProvidersFrom(BrowserAnimationsModule),
    importProvidersFrom(MatTableModule),
    importProvidersFrom(BrowserModule),
    importProvidersFrom(MatSortModule),
    importProvidersFrom(MatPaginatorModule)
]
};
