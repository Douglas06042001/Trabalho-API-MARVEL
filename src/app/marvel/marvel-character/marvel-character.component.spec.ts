import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelCharacterComponent } from './marvel-character.component';

describe('MarvelCharacterComponent', () => {
  let component: MarvelCharacterComponent;
  let fixture: ComponentFixture<MarvelCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarvelCharacterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvelCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
