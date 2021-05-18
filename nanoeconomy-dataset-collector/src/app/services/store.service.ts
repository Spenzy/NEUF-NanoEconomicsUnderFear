import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {AuthTokenService} from './auth-token.service';
import {BehaviorSubject, Observable} from 'rxjs';


const hostAddress = environment.SERVER_ADDRESS;
const api = '/store';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  Cart: BehaviorSubject<any>;

  constructor(private http: HttpClient) {
  }

  addToCart() {
  }

  getCart() {
  }

  removeFromCart() {
  }

  // sends request to server and receives all products in db.
  getAllProducts(): Observable<any> {
    return this.http.get(hostAddress + api + '/product', httpOptions);
  }

  // sends request to server and receives specific product in db.
  getProduct(id): Observable<any> {
    return this.http.get(hostAddress + api + '/product/' + id, httpOptions);
  }

  // sends request to server and receives all Categories in db.
  getAllCategories(): Observable<any> {
    return this.http.get(hostAddress + api + '/category', httpOptions);
  }

  // sends request to server and receives specific Category in db.
  getCategory(name): Observable<any> {
    return this.http.get(hostAddress + api + '/category/' + name, httpOptions);
  }
}
