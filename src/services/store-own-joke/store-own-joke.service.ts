import { Injectable, } from "@angular/core";

//Service Storage Own Joke
import { FavoriteJoke } from "../store-joke/joke-favorites.model";

@Injectable({
    providedIn: 'root'
})
export class ServiceStorageOwnJokes{
    jokes:FavoriteJoke[] = [];

    addJoke(joke:FavoriteJoke){
        this.jokes.push(joke);
        window.alert('Joke saved to own jokes!');
    }

    getJokes(): FavoriteJoke[] {
        return this.jokes;
    }

    printJokes():void{
        console.log(this.jokes);
    }
}