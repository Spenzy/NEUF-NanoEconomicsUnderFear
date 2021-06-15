import {Pipe, PipeTransform} from '@angular/core';
import {LanguageService} from '../services/language.service';

@Pipe({
  name: 'language'
})
export class LanguagePipe implements PipeTransform {

  constructor(private langService: LanguageService){
  }

  transform(value: unknown, ...args: unknown[]): unknown {
    return value[this.langService.getCurrentLanguage().toLowerCase()];
  }

}
