import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MarvelCharacterComponent } from './marvel-character/marvel-character/marvel-character.component';

@NgModule({
  declarations: [
    AppComponent,
    MarvelCharacterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
