import { Injectable } from "@angular/core";
import { FavoriteJoke } from "./joke-favorites.model";

@Injectable({
    providedIn: 'root'
})
export class ServiceStorageJokeFavorites{
    jokes:FavoriteJoke[] = [];

    addJoke(joke:FavoriteJoke){
        this.jokes.push(joke);
        window.alert('Joke saved to favorites!');
    }

    getJokes(): FavoriteJoke[] {
        return this.jokes;
    }

    printJokes():void{
        console.log(this.jokes);
    }
}