import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { lastValueFrom } from 'rxjs';

//Joke Model
import { ChuckNorrisJoke } from "./random-joke.model";

@Injectable({
    providedIn: 'root'
})
export class ApiRandomJokeService{

    //Data
    private apiURLJoke:string = 'https://api.chucknorris.io/jokes/random';
    joke:ChuckNorrisJoke | undefined;
    value:string = '';

    constructor(private http: HttpClient) { }

    //generating and returning new error
    randomJoke():ChuckNorrisJoke {
        this.fetchAPIData().then((data) => {
            this.joke = data;
            this.value = this.joke.value;
        });

        if(this.joke !== undefined){
            return this.joke;
        }else{
            throw new Error("No joke available");
        }
    }

    private async fetchAPIData(): Promise<ChuckNorrisJoke> {
        return await lastValueFrom(
            this.http.get<ChuckNorrisJoke>(this.apiURLJoke)
        )
    }
}