import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

const currentUser = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class AuthTokenService {
  isLoggedIn = false;
  authToken: string;

  constructor(private http: HttpClient) {
    this.isLoggedIn = false;
    this.authToken = null;
  }

  loadSession() {
    const token = window.localStorage.getItem('token');
    this.isLoggedIn = true;
    this.authToken = token;
  }

  destroySession() {
    this.isLoggedIn = false;
    this.authToken = null;
    window.localStorage.clear();
  }

  saveSession(authToken){
    this.destroySession();
    this.authToken = authToken;
  }

  public saveUser(user: any): void {
    window.localStorage.removeItem(currentUser);
    window.localStorage.setItem(currentUser, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.localStorage.getItem(currentUser);
    if (user) {
      return JSON.parse(user);
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
