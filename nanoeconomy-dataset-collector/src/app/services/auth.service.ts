import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  constructor(private http: HttpClient, private router: Router, private authToken: AuthTokenService) {
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(hostAddress + api + '/login', {
      username,
      password
    }, httpOptions);
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(hostAddress + api + '/register', {
      username,
      email,
      password
    }, httpOptions);
  }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    console.log(route);

    if (!this.authToken.getStatus()) {
      this.router.navigate(['login']).then(r => console.log(r));
    }
    else {
      this.router.navigate(['home']).then(r => console.log(r));
    }
    return this.authToken.getStatus();
  }

}
