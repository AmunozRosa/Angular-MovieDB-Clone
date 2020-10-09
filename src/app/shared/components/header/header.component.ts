import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LanguageService } from '../../services/language.service';
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
    private route: ActivatedRoute,
    private language: LanguageService
  ) {}
  public genres$;
  public searchForm: FormGroup;
  public searchParams: string = this.route.snapshot.queryParams['search'];
  public avalaibleLanguages;

  ngOnInit(): void {
    this.avalaibleLanguages = this.language.avalaibleLanguages;
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

  setLanguage(language) {
    this.language.setAppLanguage(language);
  }
}
