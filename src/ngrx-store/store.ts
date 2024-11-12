import { Action, ActionReducer } from "@ngrx/store";
import { todoReducer, TodoState } from "./todo/reducers";
import { TodoEffects } from "./todo/effects";

import { jokeReducer, JokeState } from "./favoriteJokes/reducers";

export interface AppState {
    todo: TodoState;
    joke: JokeState[];
  }
  
  export interface AppStore {
    todo: ActionReducer<TodoState, Action>;
    joke: ActionReducer<JokeState, Action>;
  }
  
  //StorageManager
  export const appStore: AppStore = {
    todo: todoReducer,
    joke: jokeReducer,
  }
  
  //EffectManager
  export const appEffects = [TodoEffects];