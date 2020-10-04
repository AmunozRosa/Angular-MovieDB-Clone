import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-jumbotron',
  templateUrl: './movie-jumbotron.component.html',
  styleUrls: ['./movie-jumbotron.component.scss'],
})
export class MovieJumbotronComponent implements OnInit {
  @Input() movie;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToMovieDetail(id) {
    this.router.navigate(['/movie', id]);
  }
}
