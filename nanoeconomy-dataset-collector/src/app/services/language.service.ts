import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor() { }

  getCurrentLanguage(): string{
    const currentLanguage = localStorage.getItem('language');
    if (currentLanguage){
      return currentLanguage;
    }else{
      return 'en';
    }
  }
}
