import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieJumbotronComponent } from './movie-jumbotron.component';

describe('MovieJumbotronComponent', () => {
  let component: MovieJumbotronComponent;
  let fixture: ComponentFixture<MovieJumbotronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieJumbotronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieJumbotronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
