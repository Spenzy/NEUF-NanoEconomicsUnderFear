import { Component, OnInit } from '@angular/core';
import { Router,  } from '@angular/router';

// service imports
import {AuthService} from '../../services/auth.service';
import {AuthTokenService} from '../../services/auth-token.service';
import {ErrorStateMatcher} from '@angular/material/core';
import {FormControl, FormGroupDirective, NgForm} from '@angular/forms';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  errMsg = '';
  roles: string[] = [];
  user: any;

  constructor(private router: Router, private authService: AuthService, private authToken: AuthTokenService) { }

  ngOnInit(): void {
      this.isLoggedIn = this.authToken.getStatus();
      if (this.isLoggedIn){
        this.router.navigate(['dass21']).then(err => console.log(err));
      }
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe(
      data => {
        this.authToken.saveSession(data.token);
        this.authToken.loadSession();
        this.router.navigate(['dass21']).then(err => console.log(err));
      },
      err => {
        this.errMsg = err.status + ' : ' + err.error.msg;
        console.log(err);
      }
    );
  }

}
