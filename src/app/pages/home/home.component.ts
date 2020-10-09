import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { LanguageService } from 'src/app/shared/services/language.service';
import { MoviesService } from '../../shared/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private movieService: MoviesService,
    private languageService: LanguageService,
    private router: Router
  ) {}

  public featuredCarousel: SwiperConfigInterface = {
    observer: true,
    direction: 'horizontal',
    slidesPerView: 1,
    slideToClickedSlide: true,
    mousewheel: false,
    autoplay: {
      delay: 7000,
      //disableOnInteraction: true,
    },
    scrollbar: false,
    watchSlidesProgress: true,
    navigation: false,
    keyboard: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    centeredSlides: false,
    loop: false,
    roundLengths: true,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    spaceBetween: 0,
  };

  latestMovie$: Observable<{}>;
  popularMovies$: Observable<{}>;
  topRatedMovies$: Observable<{}>;
  nowPlaying$: Observable<{}>;
  genres$: Observable<{}>;

  ngOnInit(): void {
    this.latestMovie$ = this.languageService.lang$.pipe(
      switchMap(() => this.movieService.getLatestMovie())
    );

    this.popularMovies$ = this.languageService.lang$.pipe(
      switchMap(() => this.movieService.getPopularMovies())
    );

    this.topRatedMovies$ = this.languageService.lang$.pipe(
      switchMap(() => this.movieService.getTopRatedMovies())
    );

    this.nowPlaying$ = this.languageService.lang$.pipe(
      switchMap(() => this.movieService.getNowPlayingMovies())
    );

    this.genres$ = this.languageService.lang$.pipe(
      switchMap(() => this.movieService.getGenders())
    );
  }

  navigateToGenre(genreName) {
    this.router.navigate(['/search-results'], {
      queryParams: { search: genreName },
    });
  }
}
