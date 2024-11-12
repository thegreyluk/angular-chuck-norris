import { createAction, props } from "@ngrx/store";
import { FavoriteJoke } from "./favoriteJoke.model";

export const addJoke = createAction('[FavoriteJoke] Add Joke', props<{ joke: FavoriteJoke }>());