import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from './auth.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {formatDate} from '@angular/common';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment';

const hostAddress = environment.SERVER_ADDRESS;

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class TrackerService {

  userID: any;
  dassScores: any;
  sessionDetails: any;


  session: BehaviorSubject<any> = new BehaviorSubject(null);
  currentLocation: string;

  constructor(private http: HttpClient, private authService: AuthService, private router: Router) {
    router.events.subscribe(val => {
      if (location.pathname === '') {
        this.currentLocation = this.router.url;
      } else {
        this.currentLocation = 'Home';
      }
    });
  }

  startSession(dassScores) {
    this.dassScores = dassScores;
    this.session.next({
      startDate: formatDate(new Date(), 'fullDate', 'en'),
      startTime: formatDate(new Date(), 'mediumTime', 'en'),
      activity: [],
      endTime: ''
    });
  }

  timeStamp(message, reached?, productNbr?) {
    if (reached) {
      this.session.subscribe(
        data => data.activity.push({
          location: this.currentLocation,
          message,
          reached,
          time: formatDate(new Date(), 'mediumTime', 'en')
        }),
        error => console.log(error)
      );
    } else if (productNbr) {
      this.session.subscribe(
        data => data.activity.push({
          location: this.currentLocation,
          message,
          reached,
          productNbr,
          time: formatDate(new Date(), 'mediumTime', 'en')
        }),
        error => console.log(error)
      );
    }
  }

  endSession() {
    this.session.subscribe(
      data => data.endTime = formatDate(new Date(), 'short', 'en')
    );
    this.sessionDetails = this.session.value;
    this.userID = this.authService.currentUser.value.id;
    return this.http.post(hostAddress + '/session' + '/save', {
      userID: this.userID,
      dassScore: this.dassScores,
      sessionDetails: this.sessionDetails
    }, httpOptions);
  }

}
