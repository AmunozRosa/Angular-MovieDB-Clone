import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MoviesService } from '../../shared/services/movies.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {
  movieDetail$: Observable<any>;
  similarMovies$: Observable<any>;

  constructor(
    private movieService: MoviesService,
    private route: ActivatedRoute
  ) {}

  private getMovieDetail(movieId) {
    this.movieDetail$ = this.movieService.getMovieDetail(movieId);
  }

  getSimilarMovies(movieId) {
    this.similarMovies$ = this.movieService.getSimilar(movieId, 1);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.getMovieDetail(params.id);
      this.getSimilarMovies(params.id);
    });
  }
}
