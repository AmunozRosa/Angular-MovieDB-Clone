import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { HomeComponent } from './shared/pages/home/home.component';
import { PremieresComponent } from './shared/pages/premieres/premieres.component';
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
];

@NgModule({
  declarations: [HomeComponent, PremieresComponent],
  imports: [RouterModule.forRoot(routes), SwiperModule, SharedModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
