import { Component, inject } from '@angular/core';

//Service API Cat
import { ServiceAPIRandomCat } from '../../services/api-random-cat/random-cat.service';
import { CatModel } from '../../services/api-random-cat/random-cat.model';

@Component({
  selector: 'app-cats',
  standalone: true,
  imports: [],
  templateUrl: './cats.component.html',
  styleUrl: './cats.component.css'
})
export class CatsComponent {

  urlCat:string = '';
  cat:CatModel | undefined;
  private serviceRandomCat = inject(ServiceAPIRandomCat);

  constructor(){
    // this.newRandomCat();
  }
  
  newRandomCat(){
    this.cat = this.serviceRandomCat.randomCat();

    this.urlCat = this.cat._id !== undefined ? `https://cataas.com/cat/${this.cat._id}`: '';
    
    console.log(this.urlCat)
  }
}