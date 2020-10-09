import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { LanguageService } from 'src/app/shared/services/language.service';
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
    private languageService: LanguageService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParams) => {
      this.search$ = this.languageService.lang$.pipe(
        switchMap(() =>
          this.moviesService.onSearchMovies(
            queryParams.search,
            queryParams.page
          )
        )
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
