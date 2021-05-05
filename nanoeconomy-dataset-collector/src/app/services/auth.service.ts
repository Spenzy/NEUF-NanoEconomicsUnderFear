import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subscription} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {environment} from '../../environments/environment';
import {Router, CanActivate, ActivatedRouteSnapshot} from '@angular/router';
import {AuthTokenService} from './auth-token.service';


const hostAddress = environment.SERVER_ADDRESS;
const api = '/auth';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private http: HttpClient, private router: Router, private authToken: AuthTokenService) {
  }
  // sends login request to server and receives access token if correct.
  login(username: string, password: string): Observable<any> {
    return this.http.post(hostAddress + api + '/login', {
      username,
      password
    }, httpOptions);
  }

  // sends registration request
  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(hostAddress + api + '/register', {
      username,
      email,
      password
    }, httpOptions);
  }

  //
  logout(): Subscription {
    return this.http.get(hostAddress + api + '/logout').subscribe(
      data => {
        this.authToken.destroySession();
      },
      err => {
        console.log(err);
      }
    );
  }

  getUser(): any{
    this.currentUser.next({
      userID: this.authToken.getPayload().id,
      isAdmin: this.authToken.getPayload().isAdmin
    });
  }

  isAdmin(): any{
    return this.authToken.getPayload().isAdmin;
  }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    console.log(route);

    if (!this.authToken.getStatus()) {
      this.router.navigate(['login']).then(r => console.log(r));
    }
    return this.authToken.getStatus();
  }

}
