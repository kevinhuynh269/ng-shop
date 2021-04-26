import { Component, OnInit } from '@angular/core';
import { DogService } from './dog.service';
import { Dogs } from './Model/dogs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'myapp';
  dogList: Dogs[] = [];
  constructor(private dogService: DogService) {}
  
  ngOnInit(): void {
    this.dogList = this.dogService.all();
  }

  
}
