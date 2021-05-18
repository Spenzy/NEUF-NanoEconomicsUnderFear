import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';

import {AuthInterceptor} from './interceptor/auth.interceptor';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {Dass21sheetComponent} from './dass21sheet/dass21sheet.component';
import {LanguagePipe} from './pipes/language.pipe';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatStepperModule} from '@angular/material/stepper';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {HasAdminDirective} from './directives/has-admin.directive';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {NavbarComponent} from './navbar/navbar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {ResultmodalComponent} from './dass21sheet/resultmodal/resultmodal.component';
import { IonicStorageModule } from '@ionic/storage-angular';


@NgModule({
    declarations: [AppComponent, Dass21sheetComponent, LanguagePipe, HasAdminDirective, NavbarComponent, ResultmodalComponent],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        IonicStorageModule.forRoot(),
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatStepperModule,
        MatInputModule,
        MatSelectModule,
        MatMenuModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
        MatProgressSpinnerModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatIconModule,
        MatDialogModule
    ],
    providers: [{provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
        {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
    bootstrap: [AppComponent],
    exports: [
        NavbarComponent
    ]
})
export class AppModule {}
