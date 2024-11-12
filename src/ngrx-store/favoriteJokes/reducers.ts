import { FavoriteJoke } from "./favoriteJoke.model";
import * as FavoriteJokeActions from "./actions";

export interface JokeState {
    jokes: FavoriteJoke[];
}

export const initialState: JokeState = {
    jokes: [],
};

// const _jokeReducer = createReducer(
// initialState,

// // on(FavoriteJokeActions.loadTodos, state => ({ ...state)),

// // on(FavoriteJokeActions.loadTodosSuccess, (state, { todos }) =>({ ...state, todos, loading: false })),

// // on(FavoriteJokeActions.loadTodosFailure, (state, { error }) => ({ ...state, error, loading: false })),

// on(FavoriteJokeActions.addJoke, (state, { joke }) => ({ ...state, jokes: [...state.jokes, joke] })),

// // on(FavoriteJokeActions.updateTodo, (state, { todo }) => ({ ...state, todos: state.todos.map(t => t.id === todo.id ? todo : t) })),

// // on(FavoriteJokeActions.deleteTodo, (state, { id }) => ({ ...state, todos: state.todos.filter(t => t.id !== id) })),
// );

// export function jokeReducer(state: JokeState | undefined, action: Action) {
//     return _jokeReducer(state, action);
//     }

export function jokeReducer(state = initialState, action: any):JokeState {
    switch (action.type){
        case FavoriteJokeActions.addJoke.type:
            return { ...state, jokes : [...state.jokes, action.joke] }
        default:
            return state;
    }
}