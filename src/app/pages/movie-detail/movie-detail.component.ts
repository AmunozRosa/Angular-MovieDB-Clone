import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../shared/services/movies.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {
  movieDetail$;
  movieId;

  constructor(
    private movieService: MoviesService,
    private route: ActivatedRoute
  ) {}

  getMovieDetails() {
    this.route.params.subscribe((params) => {
      this.movieId = params.id;
    });
    this.movieDetail$ = this.movieService.getMovieDetail(this.movieId);
  }

  ngOnInit(): void {
    this.getMovieDetails();
  }
}
