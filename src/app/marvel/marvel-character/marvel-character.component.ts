import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MarvelService } from '../marvel.service';

@Component({
  selector: 'app-marvel-character',
  templateUrl: './marvel-character.component.html',
  styleUrls: ['./marvel-character.component.css']
})
export class MarvelCharacterComponent implements OnInit {

  characters: Observable<any>

  constructor(
    private MarvelService: MarvelService
  ) { }

  ngOnInit() {
    this.characters = this.MarvelService.getAllCharacter()
  }

  showComics(id:number){
    console.log(id)
  }

  showEvents(id:number){
    
  }
  showSeries(id:number){
    
  }
  showStories(id:number){
    
  }

}
