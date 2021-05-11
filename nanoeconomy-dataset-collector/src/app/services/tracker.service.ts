import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from './auth.service';
import {BehaviorSubject} from 'rxjs';
import {formatDate} from '@angular/common';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class TrackerService {

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

  startSession() {
    this.session.next({
      startDate: formatDate(new Date(), 'fullDate', 'en'),
      startTime: formatDate(new Date(), 'mediumTime', 'en'),
      activity: [],
      endTime: ''
    });
  }

  timeStamp(message, reached?, productNbr?) {
    if (reached){
      this.session.subscribe(
        data => data.activity.push({
          location: this.currentLocation,
          message,
          reached,
          time: formatDate(new Date(), 'mediumTime', 'en')
        }),
        error => console.log(error)
      );
    }
    else if (productNbr){
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
  }

}
