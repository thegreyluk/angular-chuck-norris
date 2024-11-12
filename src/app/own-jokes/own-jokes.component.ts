import { Component, inject } from '@angular/core';
import { NgFor } from '@angular/common';

//Service Storage Own Joke
import { FavoriteJoke } from '../../services/store-joke/joke-favorites.model';
import { ServiceStorageOwnJokes } from '../../services/store-own-joke/store-own-joke.service';
@Component({
  selector: 'app-own-jokes',
  standalone: true,
  imports: [NgFor],
  templateUrl: './own-jokes.component.html',
  styleUrl: './own-jokes.component.css'
})
export class OwnJokesComponent {

  jokeList: FavoriteJoke[] = [];
  private jokeStorage = inject(ServiceStorageOwnJokes);

  constructor() {
    this.jokeList = this.jokeStorage.getJokes();
  }
}
