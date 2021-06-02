import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MarvelCharacterService } from '../marvel-character.service';

@Component({
  selector: 'app-marvel-character',
  templateUrl: './marvel-character.component.html',
  styleUrls: ['./marvel-character.component.css']
})
export class MarvelCharacterComponent implements OnInit {

  characters: Observable<any>

  constructor(
    private MarvelCharacterService: MarvelCharacterService
  ) { }

  ngOnInit() {
    this.characters = this.MarvelCharacterService.getAll()
  }

}
