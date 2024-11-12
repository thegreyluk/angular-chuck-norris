import { Component, inject} from '@angular/core';
import { NgFor } from '@angular/common';

//Angular Material
import { MatTable, MatTextColumn, MatHeaderCell, MatCell, MatRow, MatRowDef, MatHeaderRow, MatHeaderRowDef} from '@angular/material/table';  


//ngRx joke store
// import { Store } from '@ngrx/store';
// import { JokeState } from '../../ngrx-store/favoriteJokes/reducers';
// import * as FavoriteJokeActions from '../../ngrx-store/favoriteJokes/actions';
// import { FavoriteJoke } from '../../ngrx-store/favoriteJokes/favoriteJoke.model';
import { ServiceStorageJokeFavorites } from '../../services/store-joke/joke-favorites.service';
import { FavoriteJoke } from '../../services/store-joke/joke-favorites.model';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [
    //Basic
    NgFor,
    //Material
    MatTable,
    // MatTextColumn,
    // MatHeaderCell,
    // MatCell,
    // MatRow,
    // MatRowDef,
    // MatHeaderRow,
    // MatHeaderRowDef,
  
  ],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent {

  private jokeStorage = inject(ServiceStorageJokeFavorites);
  jokeList:FavoriteJoke[] = [{value: "test", creator: "test"}];

  // displayedColumns: string[] = ["value", "creator"]; //['joke', 'creator'];
  // dataSource = ELEMENT_DATA; //:FavoriteJoke[];

  constructor(){
    this.jokeList = this.jokeStorage.getJokes();
    // this.dataSource = this.jokeList;
  }

  // favoriteJokes: FavoriteJoke[] = [];

  // constructor(private store:Store<JokeState>){
  //   this.store.select('jokes').subscribe(jokes => this.favoriteJokes = jokes);
  // }
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    value: 'Test', 
    creator: 'Chucky',
  },
  {
    value: 'Test2', 
    creator: 'Chucky',
  },
];

interface PeriodicElement {
  value: string;
  creator : string;
}