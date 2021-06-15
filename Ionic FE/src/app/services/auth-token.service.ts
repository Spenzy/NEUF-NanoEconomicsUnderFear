import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import jwtDecode from 'jwt-decode';
import {Storage} from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})

export class AuthTokenService {
  protected isLoggedIn = null;
  protected authToken = null;

  constructor(private http: HttpClient, private storage: Storage) {
    this.init().then(err => console.log(err));
  }

  async loadSession() {
    const token = await this.storage.get('token');
    console.log(token);
    if (token) {
      this.authToken = token;
      this.isLoggedIn = await this.storage.get('status');
    }
    console.log(this.storage.keys());
  }

  destroySession() {
    this.isLoggedIn = null;
    this.authToken = null;
    this.storage.clear().then(err => console.log(err));
  }

  async saveSession(authToken) {
    await this.storage.set('token', authToken);
    await this.storage.set('status', true);
    await this.loadSession();
  }

  getPayload(): any {
    return jwtDecode(this.authToken);
  }

  getStatus(){
    return this.isLoggedIn;
  }

  getToken(){
    return this.authToken;
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    this.storage = await this.storage.create();
  }
}
