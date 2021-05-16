import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {AuthTokenService} from './auth-token.service';
import {Observable} from 'rxjs';


const hostAddress = environment.SERVER_ADDRESS;
const api = '/store';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private http: HttpClient) {
  }

  // sends request to server and receives all products in db.
  getAllProducts(): Observable<any> {
    return this.http.get(hostAddress + api + '/product', httpOptions);
  }

  // sends request to server and receives specific product in db.
  getProducts(id): Observable<any> {
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
