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

  constructor(private http: HttpClient, private authService: AuthService, private router: Router, private location: Location) {
    router.events.subscribe(val => {
      if (location.pathname === '') {
        this.currentLocation = location.pathname;
      } else {
        this.currentLocation = 'Home';
      }
    });
  }

  startSession() {
    this.session.next({
      startDate: formatDate(new Date(), 'fullDate', 'en'),
      startTime: formatDate(new Date(), 'mediumTime', 'en'),
      activity: []
    });
  }

  timeStamp(message, reached?, productNbr?) {
    this.session.value.activity.next({
      location: this.currentLocation,
      message,
      reached,
      productNbr,
      time: formatDate(new Date(), 'mediumTime', 'en')
    });
  }

  endSession(){
    this.session.next({
      endTime: formatDate(new Date(), 'short', 'en')
    });
  }

}
