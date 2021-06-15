import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {AuthTokenService} from '../services/auth-token.service';
import {Observable} from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authToken: AuthTokenService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req;
    const token = this.authToken.getToken();
    console.log(token);
    if (token != null) {
      authReq = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token) });
    }
    return next.handle(authReq);
  }
}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];
