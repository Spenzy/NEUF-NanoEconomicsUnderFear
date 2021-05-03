import {Component, OnInit} from '@angular/core';
import {PageEvent} from '@angular/material/paginator';
import {LanguageService} from '../../services/language.service';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../../services/auth.service';

import {environment} from '../../../environments/environment';

const hostAddress = environment.SERVER_ADDRESS;

@Component({
  selector: 'app-dass21sheet',
  templateUrl: './dass21sheet.component.html',
  styleUrls: ['./dass21sheet.component.scss'],
})
export class Dass21sheetComponent implements OnInit {

  constructor(private http: HttpClient, private langService: LanguageService) { }

  questionnaire: any[] = [];

  currentLanguage = 'en';

  // MatPaginator Inputs
  length = 100;
  pageSize = 6;
  pageSizeOptions: number[] = [6, 12, 18, 21];

  // MatPaginator Output
  pageEvent: PageEvent;

  // loads question sheet

  ngOnInit(): void {
    this.currentLanguage = this.langService.getCurrentLanguage().toLowerCase();
    this.http.get<any[]>(hostAddress + '/dass/21').subscribe(
      response => {
        this.questionnaire = response;
      },
      error => {
        console.log(error);
      }
    );
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

}
