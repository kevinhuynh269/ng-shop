import { ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';

import { DogService } from './dog.service';
import { Dogs } from './Model/dogs';

describe('DogService', () => {
  let service: DogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DogService);
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should not be undefined', () => {
    let dog = service.all();
    expect(dog).toBeDefined();
  });
  it('should not be null', () => {
    let dog = service.all();
    expect(dog.length).toBeGreaterThan(0);
  });

  it('test get() functionality', () => {
    let dog:Dogs = service.get('4ziNJuYbfDius');
    let dogResult = new Dogs();
    //{"id": "4ziNJuYbfDius", "name": "relaxed bull dog GIF", "thumbnail": "https://media0.giphy.com/media/4ziNJuYbfDius/100.gif", "image": "https://media0.giphy.com/media/4ziNJuYbfDius/giphy.gif"}
    dogResult.id = "4ziNJuYbfDius";
    dogResult.name = "relaxed bull dog GIF";
    dogResult.thumbnail = "https://media0.giphy.com/media/4ziNJuYbfDius/100.gif";
    dogResult.image = "https://media0.giphy.com/media/4ziNJuYbfDius/giphy.gif";
    
    expect(dog).toBeDefined();
    expect(dog).toEqual(dogResult);
  });


});
