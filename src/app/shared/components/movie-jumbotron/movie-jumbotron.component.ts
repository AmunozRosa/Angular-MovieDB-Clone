import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-jumbotron',
  templateUrl: './movie-jumbotron.component.html',
  styleUrls: ['./movie-jumbotron.component.scss'],
})
export class MovieJumbotronComponent implements OnInit {
  @Input() movie;
  constructor() {}

  ngOnInit(): void {}
}
