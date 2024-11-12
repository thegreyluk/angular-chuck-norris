import { Component, inject, OnInit } from '@angular/core';

//random joke service
import { ApiRandomJokeService } from '../../services/api-random-joke/random-joke.service'
import { ChuckNorrisJoke } from '../../services/api-random-joke/random-joke.model';

//ngRx todo store
import { TodoListComponent } from '../../components/todo-list/todo-list.component';

//ngRx joke store
import { Store } from '@ngrx/store';
import { JokeState } from '../../ngrx-store/favoriteJokes/reducers';
import * as FavoriteJokeActions from '../../ngrx-store/favoriteJokes/actions';
import { FavoriteJoke } from '../../ngrx-store/favoriteJokes/favoriteJoke.model';
import { AppState } from '../../ngrx-store/store';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ TodoListComponent, ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  private jokeGenerator = inject(ApiRandomJokeService);
  joke:ChuckNorrisJoke | undefined = undefined;

  favoriteJokes: FavoriteJoke[] = [];
  
  // constructor(private store:Store<JokeState>){
    //   this.store.select('jokes').subscribe(jokes => {this.favoriteJokes = jokes});
    // }

    constructor(){
      this.newRandomJoke()
    }

    // ngOnInit(): void {
    //   this.newRandomJoke()
    // }

    newRandomJoke() {
      this.joke = this.jokeGenerator.randomJoke();
    }

    addNewJoke(){
      const newJoke: FavoriteJoke = {
        id: this.favoriteJokes.length + 1,
        value: 'Test witz',   
        creator: 'Chuck',
      };      

      // this.store.dispatch(FavoriteJokeActions.addJoke({ joke: newJoke }));
    }

}
