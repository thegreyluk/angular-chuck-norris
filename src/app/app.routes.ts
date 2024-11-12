import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { OwnJokesComponent } from './own-jokes/own-jokes.component';
import { CatsComponent } from './cats/cats.component';

export const routes: Routes = [
    // { path: 'home', component: HomeComponent },
    { path: 'favorites', component: FavoritesComponent },
    { path: 'own-jokes', component: OwnJokesComponent },
    { path: 'cats', component: CatsComponent },
];
