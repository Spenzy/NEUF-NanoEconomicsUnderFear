import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subscription} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {environment} from '../../environments/environment';
import {ActivatedRouteSnapshot, Router} from '@angular/router';
import {AuthTokenService} from './auth-token.service';


const hostAddress = environment.SERVER_ADDRESS;
const api = '/auth';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
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

  // logs user out and deletes token
  logout(): Subscription {
    return this.http.get(hostAddress + api + '/logout', httpOptions).subscribe(
      data => {
        this.authToken.destroySession();
        this.router.navigate(['login']).then(err => console.log(err));
      },
      err => {
        console.log(err);
      }
    );
  }

  async getUser(){
    await this.currentUser.next({
      id: this.authToken.getPayload().id,
      username: this.authToken.getPayload().username,
      isLoggedIn: this.authToken.getStatus()
    });
  }

  isAdmin(): any {
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
