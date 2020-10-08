import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TheMovieDBService {
  constructor() {}

  API_KEY = '904d6f3f6d1aad253adc5af6888ff2a7';
  LANG = 'es-ES';
  URL = 'https://api.themoviedb.org/3/';

  getLatestMovieEndpoint() {
    return `${this.URL}movie/latest`;
  }

  getPopularMoviesEndpoint() {
    return `${this.URL}movie/popular`;
  }

  getMovieDetailEndpoint(uuid: number) {
    return `${this.URL}movie/${uuid}`;
  }

  getTopRatedMoviesEndpoint() {
    return `${this.URL}movie/top_rated`;
  }

  getNowPlayingMoviesEndpoint() {
    return `${this.URL}movie/now_playing`;
  }

  getGendersEndpoint() {
    return `${this.URL}genre/movie/list`;
  }

  getSearchMoviesResults() {
    return `${this.URL}search/movie/`;
  }

  getSimilarMoviesResults(id) {
    return `${this.URL}movie/${id}/similar`;
  }

  getParams() {
    return {
      api_key: this.API_KEY,
      language: this.LANG,
    };
  }

  getLatestByGenre() {
    return `${this.getLatestMovieEndpoint}/genre`;
  }
}
