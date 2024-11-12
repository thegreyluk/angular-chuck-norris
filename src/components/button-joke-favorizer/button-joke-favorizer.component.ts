// import { Component } from "@angular/core";
// import { Observable } from "rxjs";
// import { FavoriteJoke } from "../../ngrx-store/favoriteJokes/favoriteJoke.model";

// import { Store } from "@ngrx/store";
// import { AppState } from "../../ngrx-store/store";

// import * as JokeActions from "../../ngrx-store/favoriteJokes/actions";

// @Component({
//     selector: 'button-joke-favorizer',
//     standalone: true,
//     imports: [],
//     templateUrl: './button-joke-favorizer.component.html',
// })
// export class ButtonJokeFavorizer {
//     joke$: Observable<FavoriteJoke[]>

//     constructor(private store:Store<AppState>) {
//         this.joke$ = this.store.select((state) => state.joke.jokes)
//     }

//     addJoke(index: number) {
//         const joke: FavoriteJoke = {id: 1, value: 'Test', creator: 'Chuck' };
//         this.store.dispatch(JokeActions.addJoke({ joke }));
//       }
// }
