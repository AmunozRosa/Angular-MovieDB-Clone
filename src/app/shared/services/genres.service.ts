import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TheMovieDBService } from './the-movie-db.service';

@Injectable({
  providedIn: 'root',
})
export class GenresService {
  constructor(
    private http: HttpClient,
    private theMovieDBService: TheMovieDBService
  ) {}

  public getGenres() {
    const url = this.theMovieDBService.getGendersEndpoint();
    const params = { ...this.theMovieDBService.getParams() };

    return this.http.get(url, { params });
  }
}
