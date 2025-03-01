import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'The Movie DB Clone';

  constructor(public translate: TranslateService) {
    translate.setDefaultLang('es-ES');
  }
}
