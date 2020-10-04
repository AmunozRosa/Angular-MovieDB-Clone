import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GenresService } from './../../services/genres.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private genresService: GenresService, private router: Router) {}
  public genres$;
  public searchForm: FormGroup;

  ngOnInit(): void {
    this.genres$ = this.genresService.getGenres();

    this.searchForm = new FormGroup({
      searchInput: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }

  navigateToSearch() {
    const searchValue = this.searchForm.get('searchInput').value;
    this.router.navigate(['/search-results'], {
      queryParams: { search: searchValue },
    });
  }
}
