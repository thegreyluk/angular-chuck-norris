import { Component, inject } from "@angular/core";

import { NgModel } from "@angular/forms";

//Service Storage Favorite Jokes
import { ServiceStorageJokeFavorites } from "../../services/store-joke/joke-favorites.service";
import { FavoriteJoke } from "../../services/store-joke/joke-favorites.model";
import { ServiceStorageOwnJokes } from "../../services/store-own-joke/store-own-joke.service";

@Component({
    selector: 'own-jokes-box',
    standalone: true,
    templateUrl: 'own-jokes-box.component.html',
    styleUrl: 'own-jokes-box.component.css',
 
})
export class OwnJokesBox{

    joke:FavoriteJoke | undefined = undefined;
    private serviceStorageFavoriteJokes = inject(ServiceStorageJokeFavorites);
    private serviceStorageOwnJokes = inject(ServiceStorageOwnJokes);

    //Favorites Storage Service
    saveJokeToFavorites(jokeText : string){
        this.joke = { value: jokeText, creator: 'Lukas' }
        this.serviceStorageFavoriteJokes.addJoke(this.joke);
    }
    
    //Own Jokes Storage Service
    saveJokeToOwnJokes(jokeText : string){
        this.joke = { value: jokeText, creator: 'Lukas' }
        this.serviceStorageOwnJokes.addJoke(this.joke);
        console.log(this.serviceStorageOwnJokes.getJokes());
    }
}