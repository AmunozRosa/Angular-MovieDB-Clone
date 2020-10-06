import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GenresService } from './../../services/genres.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private genresService: GenresService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  public genres$;
  public searchForm: FormGroup;
  public searchParams: string = this.route.snapshot.queryParams['search'];

  ngOnInit(): void {
    this.genres$ = this.genresService.getGenres();

    this.searchForm = new FormGroup({
      searchInput: new FormControl(this.searchParams, [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }

  navigateToSearch() {
    const searchValue = this.searchForm.get('searchInput').value;
    this.router.navigate(['/search-results'], {
      relativeTo: this.route,
      queryParams: { search: searchValue, page: 1 },
      queryParamsHandling: 'merge',
    });
  }
}
