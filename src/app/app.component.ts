import { Component, inject, OnInit} from '@angular/core';
import { Router, NavigationEnd, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
// import { RandomJoke } from '../components/random-joke/random-joke.component';

// import { JokeFavorizerComponent } from '../components/random-joke/state/joke-favorizer.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from '../components/todo-list/todo-list.component';

//random joke service
import { ApiRandomJokeService } from '../services/api-random-joke/random-joke.service'
import { ChuckNorrisJoke } from '../services/api-random-joke/random-joke.model';

//joke storage service
import { ServiceStorageJokeFavorites } from '../services/store-joke/joke-favorites.service';
import { FavoriteJoke } from '../services/store-joke/joke-favorites.model';

//Own Jokes Box
import { OwnJokesBox } from '../components/own-jokes-box/own-jokes-box.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet, 
    TodoListComponent,
    OwnJokesBox,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  
  title = 'angular-chuck-norris';
  currentRoute:string = "";
  private serviceAPIFetchRandomJoke = inject(ApiRandomJokeService);
  private serviceStorageJokeFavorites = inject(ServiceStorageJokeFavorites);
  joke:ChuckNorrisJoke | undefined = undefined;
  
  constructor(private router:Router){
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.urlAfterRedirects.substring(1); // Entfernt den führenden '/'
      }
    });
  }

  ngOnInit(): void {
    // todo
    // this.newRandomJoke()clear
  }
  
  newRandomJoke() {
    this.joke = this.serviceAPIFetchRandomJoke.randomJoke();
  }
  
  saveJokeToFavorites() {
    let favoriteJoke = {
      value: this.joke?.value === undefined? '' : this.joke?.value,
      creator: 'Chucky'
    };

    this.serviceStorageJokeFavorites.addJoke(favoriteJoke);
  }
  
}