import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { Observable } from 'rxjs';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private movieService: MoviesService) {}

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
    centeredSlides: true,
    loop: true,
    roundLengths: true,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    spaceBetween: 0,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
    },
  };

  latestMovie$: Observable<any>;
  popularMovies$: Observable<any>;
  topRatedMovies$: Observable<any>;
  nowPlaying$: Observable<any>;

  ngOnInit(): void {
    this.latestMovie$ = this.movieService.getLatestMovie();
    this.popularMovies$ = this.movieService.getPopularMovies();
    this.topRatedMovies$ = this.movieService.getTopRatedMovies();
    this.nowPlaying$ = this.movieService.getNowPlayingMovies();
  }
}
