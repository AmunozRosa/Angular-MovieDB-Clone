import { Component, OnInit } from '@angular/core';
import { GenresService } from './../../services/genres.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private genresService: GenresService) {}
  public genres$;

  ngOnInit(): void {
    this.genres$ = this.genresService.getGenres();
  }
}
