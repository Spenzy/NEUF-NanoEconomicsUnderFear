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

  timeStamp(message, reached?, productID?) {
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
    } else if (productID) {
      this.session.subscribe(
        data => {
          data.activity.push({
            location: this.currentLocation,
            message,
            reached,
            productID,
            time: formatDate(new Date(), 'mediumTime', 'en')
          });
          console.log(this.session);
        },
        error => console.log(error)
      );
    }
  }

  endSession() {
    this.session.subscribe(
      data => data.endTime = formatDate(new Date(), 'short', 'en')
    );
    this.sessionDetails = this.session.value;
    // this.userID = '6092c7a13f88191cdcfcd2ea';
    return this.http.post(hostAddress + '/session' + '/save', {
      userID: this.authService.currentUser.value.id,
      DASS21_SCORES: this.dassScores,
      sessionDetails: this.sessionDetails
    }, httpOptions);
  }

  // sends request to server and receives all sessions in db.
  getAllSessions(): Observable<any> {
    return this.http.get(hostAddress + '/session' + '/retrieve', httpOptions);
  }

  // sends request to server and receives specific session in db.
  getSession(id): Observable<any> {
    return this.http.get(hostAddress + '/session' + '/retrieve/' + id, httpOptions);
  }

}
