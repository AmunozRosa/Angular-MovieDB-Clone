import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { HomeComponent } from './pages/home/home.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { PremieresComponent } from './pages/premieres/premieres.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { SharedModule } from './shared/shared.module';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
  },

  {
    path: 'premieres',
    component: PremieresComponent,
  },

  {
    path: 'movie/:id',
    component: MovieDetailComponent,
  },

  {
    path: 'search-results',
    component: SearchResultsComponent,
  },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  declarations: [
    HomeComponent,
    PremieresComponent,
    MovieDetailComponent,
    SearchResultsComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    SwiperModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
