import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

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
    this.isLoggedIn = true;
    this.authToken = token;
    console.log(this.authToken + this.isLoggedIn);
  }

  destroySession() {
    this.isLoggedIn = false;
    this.authToken = null;
    window.localStorage.clear();
  }

  saveSession(authToken){
    this.destroySession();
    window.localStorage.setItem('token', authToken);
  }

  public saveUser(user: any): void {
    window.localStorage.removeItem('loggedUser');
    window.localStorage.setItem('loggedUser', JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.localStorage.getItem('loggedUser');
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
