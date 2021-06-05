import {Component, OnInit} from '@angular/core';
import {LanguageService} from '../../services/language.service';
import {HttpClient} from '@angular/common/http';

import {environment} from '../../../environments/environment';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {AuthService} from '../../services/auth.service';
import {MatDialog} from '@angular/material/dialog';
import {ResultmodalComponent} from './resultmodal/resultmodal.component';
import {TrackerService} from '../../services/tracker.service';
import {Router} from '@angular/router';

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

  constructor(private http: HttpClient,
              private authService: AuthService,
              private langService: LanguageService,
              private trackerService: TrackerService,
              public router: Router,
              public dialog: MatDialog) {
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
  scores = {
    answers: null,
    depressionScore: null,
    anxietyScore: null,
    stressScore: null
  };

  // this function affects answer to answers table
  updateAnswer(answer, index) {
    this.answers[index] = answer.value;
    console.log(this.answers);
  }

  // here we calculate scores that will be persisted in db
  calculateScore(factorTable): any {
    let sum = 0;
    let index;
    for (index of factorTable) {
      sum += this.answers[index - 1]; // provided factorTables start from 1
    }
    return sum;
  }

  onSubmit() {
    this.scores.answers = this.answers;
    this.scores.depressionScore = this.calculateScore(this.depressionIndexes);
    this.scores.anxietyScore = this.calculateScore(this.anxietyIndexes);
    this.scores.stressScore = this.calculateScore(this.stressIndexes);
    this.trackerService.startSession(this.scores);
    console.log(this.scores);
    // this.router.navigate(['login']).then(r => console.log(r));
    const dialogRef = this.dialog.open(ResultmodalComponent, {
      data: {scores: this.scores, user: this.authService.currentUser}
    });
  }

  changeLang(lang) {
    this.langService.changeLanguage(lang);
  }

  ngOnInit(): void {
    this.loading = true;
    this.answers = [2, 1, 2, 0, 0, 1, 0, 2, 0, 3, 0, 2, 0, 1, 0, 2, 0, 1, 1, 3, 3];
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
