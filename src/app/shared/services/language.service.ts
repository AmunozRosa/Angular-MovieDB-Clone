import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  constructor() {}

  avalaibleLanguages = [
    { name: 'Español', code: 'es-ES' },
    { name: 'English', code: 'en-EN' },
  ];

  lang$: BehaviorSubject<string> = new BehaviorSubject('es-ES');

  public setAppLanguage(language) {
    this.lang$.next(language);
  }
}
