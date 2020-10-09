import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'The Movie DB Clone';

  constructor(translate: TranslateService) {
    translate.setDefaultLang('ES');
    translate.use('ES');
  }
}
