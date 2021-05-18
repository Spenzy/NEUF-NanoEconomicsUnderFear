import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import jwtDecode from 'jwt-decode';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})

export class AuthTokenService{
  protected isLoggedIn = false;
  protected authToken: string;

  constructor(private http: HttpClient, private storage: Storage) {
    this.storage.create();
    this.isLoggedIn = false;
    this.authToken = null;
  }

  async loadSession() {
    const token = await this.storage.get('token');
    if (token) {
      this.authToken = token;
      this.isLoggedIn = true;
    }
  }

  destroySession() {
    this.isLoggedIn = false;
    this.authToken = null;
    this.storage.clear();
  }

  async saveSession(authToken) {
    await this.storage.set('token', authToken);
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
