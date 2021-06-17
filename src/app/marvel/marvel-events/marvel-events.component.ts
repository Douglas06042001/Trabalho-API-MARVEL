import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarvelService } from '../marvel.service';

@Component({
  selector: 'app-marvel-events',
  templateUrl: './marvel-events.component.html',
  styleUrls: ['./marvel-events.component.css']
})
export class MarvelEventsComponent implements OnInit {

  characters

  constructor(
    private route: ActivatedRoute,
    private MarvelService: MarvelService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = parseInt(params['id'], 10)
      this.characters = this.MarvelService.getEventsByCharacterId(id)
    })
    this.characters.subscribe(res => console.log(res));
  }

}
