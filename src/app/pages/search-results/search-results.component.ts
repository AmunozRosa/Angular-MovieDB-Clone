import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MoviesService } from 'src/app/shared/services/movies.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  public search$: Observable<any>;
  public currentPage: number;

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.onSearch();
  }

  onSearch() {
    this.route.queryParams.subscribe((queryParams) => {
      this.search$ = this.moviesService.onSearchMovies(
        queryParams.search,
        queryParams.page
      );
    });
  }

  goToPage(page) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page: page },
      queryParamsHandling: 'merge',
    });
  }
}
