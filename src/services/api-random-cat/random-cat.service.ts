import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

//Cat Model
import { CatModel } from "./random-cat.model";
import { lastValueFrom } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class ServiceAPIRandomCat{

    url:string = 'https://cataas.com/cat?json=true';
    cat:CatModel | undefined;

    constructor(private http: HttpClient){}

    randomCat():CatModel{
        this.fetchAPIData().then((data) => {
            this.cat = data;
        });
        
        console.log(this.cat)
        if(this.cat !== undefined){
            return this.cat;
        }else{
            throw new Error("No cat response found");
        }
    }

    private async fetchAPIData() : Promise<CatModel>{
        return await lastValueFrom(
            this.http.get<CatModel>(this.url)
        );

    }
}