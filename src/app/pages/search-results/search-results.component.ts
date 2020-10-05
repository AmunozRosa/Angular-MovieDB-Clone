import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MoviesService } from 'src/app/shared/services/movies.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  public search$: Observable<any>;

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.onSearch();
  }

  onSearch() {
    this.route.queryParams.subscribe((queryParams) => {
      this.search$ = this.moviesService.onSearchMovies(queryParams.search);
    });
  }
}
