import { createSelector } from "@ngrx/store";
import { JokeState } from "./reducers";

export const selectJokes = (state: JokeState) => state.jokes;

export const selectJokeById = (id: number) => 
    createSelector(selectJokes, jokes => jokes.find(joke => joke.id === id));