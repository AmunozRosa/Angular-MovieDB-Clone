import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss'],
})
export class MovieItemComponent implements OnInit {
  @Input() movie;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToMovieDetail(id) {
    this.router.navigate(['/movie', id]);
  }
}
