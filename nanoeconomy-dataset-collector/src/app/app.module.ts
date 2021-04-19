import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import {AuthInterceptor} from './interceptor/auth.interceptor';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    MenubarModule,
    InputTextModule,
    ButtonModule
    ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
              { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor}],
  bootstrap: [AppComponent],
})
export class AppModule {}
