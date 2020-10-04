import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TheMovieDBService } from './the-movie-db.service';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(
    private http: HttpClient,
    private theMovieDBService: TheMovieDBService
  ) {}

  getLatestMovie() {
    const url = this.theMovieDBService.getLatestMovieEndpoint();
    const params = { ...this.theMovieDBService.getParams() };

    return this.http.get(url, { params });
  }

  getPopularMovies() {
    const url = this.theMovieDBService.getPopularMoviesEndpoint();
    const params = { ...this.theMovieDBService.getParams() };

    return this.http.get(url, { params });
  }

  getMovieDetail(uuid: number) {
    const url = this.theMovieDBService.getMovieDetailEndpoint(uuid);
    const params = { ...this.theMovieDBService.getParams() };

    return this.http.get(url, { params });
  }

  getTopRatedMovies() {
    const url = this.theMovieDBService.getTopRatedMoviesEndpoint();
    const params = { ...this.theMovieDBService.getParams() };

    return this.http.get(url, { params });
  }

  getNowPlayingMovies() {
    const url = this.theMovieDBService.getNowPlayingMoviesEndpoint();
    const params = { ...this.theMovieDBService.getParams() };

    return this.http.get(url, { params });
  }

  getGenders() {
    const url = this.theMovieDBService.getGendersEndpoint();
    const params = { ...this.theMovieDBService.getParams() };
    return this.http.get(url, { params });
  }

  onSearchMovies(search) {
    const url = this.theMovieDBService.getSearchMoviesResults();
    const params: any = {
      ...this.theMovieDBService.getParams(),
      query: search,
      include_adult: true,
    };

    return this.http.get(url, { params });
  }
}
