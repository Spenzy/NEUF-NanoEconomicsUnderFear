import {Component, Input, OnInit} from '@angular/core';
import {PageEvent} from '@angular/material/paginator';
import {LanguageService} from '../../services/language.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-dass21sheet',
  templateUrl: './dass21sheet.component.html',
  styleUrls: ['./dass21sheet.component.scss'],
})
export class Dass21sheetComponent implements OnInit {

  constructor(private http: HttpClient, private langService: LanguageService) { }

  @Input() questionnaire: any [] = [];

  currentLanguage = 'en';

  // MatPaginator Inputs
  length = 100;
  pageSize = 6;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent;

  // loads question sheet
  getDas21Definition(): Observable<any[]>{
    return this.http.get<any[]>('/dass/21/');
  }

  ngOnInit(): void {
    this.currentLanguage = this.langService.getCurrentLanguage().toLowerCase();
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

}
