import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  currentLanguage: any;

  constructor() {
  }

  getCurrentLanguage(): string {
    const currentLanguage = localStorage.getItem('language');
    if (currentLanguage) {
      return currentLanguage;
    } else {
      return 'en';
    }
  }

  changeLanguage(lang) {
    localStorage.setItem('language', lang);
    this.currentLanguage = lang;
    location.reload();
  }
}
