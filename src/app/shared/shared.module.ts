import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './components/footer/footer.component';
//Components
import { HeaderComponent } from './components/header/header.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { MovieJumbotronComponent } from './components/movie-jumbotron/movie-jumbotron.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MovieItemComponent,
    MovieJumbotronComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgbModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MovieItemComponent,
    MovieJumbotronComponent,
  ],
  providers: [],
  bootstrap: [],
})
export class SharedModule {}
