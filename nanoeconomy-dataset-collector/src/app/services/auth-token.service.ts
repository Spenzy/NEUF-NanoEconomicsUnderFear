import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import jwtDecode from 'jwt-decode';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthTokenService {
  protected isLoggedIn = false;
  protected authToken: string;

  constructor(private http: HttpClient) {
    this.isLoggedIn = false;
    this.authToken = null;
  }

  loadSession() {
    const token = window.localStorage.getItem('token');
    if (token){
      this.authToken = token;
      this.isLoggedIn = true;
    }
  }

  destroySession() {
    this.isLoggedIn = false;
    this.authToken = null;
    window.localStorage.clear();
  }

  saveSession(authToken){
    window.localStorage.setItem('token', authToken);
  }

  getPayload(): any {
    if (this.authToken) {
      return jwtDecode(this.authToken);
    }
    return {};
  }

  getStatus(){
    return this.isLoggedIn;
  }

  getToken(){
    return this.authToken;
  }
}
