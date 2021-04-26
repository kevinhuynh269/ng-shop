import { Injectable } from '@angular/core';
import DOGS from './dogdata.json'
import { Dogs } from './Model/dogs';
@Injectable({
  providedIn: 'root'
})
export class DogService {
  dog:Dogs[] = DOGS;
  constructor() { }
  all(){
    return this.dog;
  }
  get(id:string): Dogs{
    let dog = new Dogs();
    let func = this.dog.find(value => value.id = id);
    dog.id = func.id;
    dog.name = func.name;
    dog.thumbnail = func.thumbnail;
    dog.image = func.image;

    return dog;
  }

}
