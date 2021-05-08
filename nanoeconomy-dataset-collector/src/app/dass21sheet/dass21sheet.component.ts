import {Component, OnInit} from '@angular/core';
import {LanguageService} from '../services/language.service';
import {HttpClient} from '@angular/common/http';

import {environment} from '../../environments/environment';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {AuthService} from '../services/auth.service';

const hostAddress = environment.SERVER_ADDRESS;

@Component({
  selector: 'app-dass21sheet',
  templateUrl: './dass21sheet.component.html',
  styleUrls: ['./dass21sheet.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class Dass21sheetComponent implements OnInit {

  constructor(private http: HttpClient, private authService: AuthService, private langService: LanguageService) {
  }

  questionnaire: any[] = [];
  answers: any[] = [];

  // these indexes are used to calculate scores through their appropriate index
  depressionIndexes = [3, 5, 10, 13, 16, 17, 21];
  anxietyIndexes = [2, 4, 7, 9, 15, 19, 20];
  stressIndexes = [1, 6, 8, 11, 12, 14, 18];

  currentLanguage = 'en';
  loading: boolean; // matSpinner loading

  // loads question sheet
  form: {
    answers: any;
    depressionScore: any;
    anxietyScore: any;
    stressScore: any;
  };

  // this function affects answer to answers table
  updateAnswer(answer, index) {
    this.answers[index] = answer.value;
    console.log(this.answers);
  }

  // here we calculate scores that will be persisted in db
  calculateScore(factorTable): any {
    let sum = 0;
    for (const index of factorTable) {
      sum += this.answers[index - 1]; // provided factorTables start from 1
    }
    return sum;
  }

  onSubmit() {
    this.form.depressionScore = this.calculateScore(this.depressionIndexes);
    this.form.anxietyScore = this.calculateScore(this.anxietyIndexes);
    this.form.stressScore = this.calculateScore(this.stressIndexes);
    console.log(this.form);
  }

  changeLang(lang) {
    this.langService.changeLanguage(lang);
  }

  ngOnInit(): void {
    this.loading = true;
    this.currentLanguage = this.langService.getCurrentLanguage().toLowerCase();
    this.http.get<any[]>(hostAddress + '/dass/21').subscribe(
      response => {
        this.questionnaire = response;
        this.loading = false;
      },
      error => {
        console.log(error);
      }
    );
  }
}
