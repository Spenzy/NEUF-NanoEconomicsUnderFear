import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {AuthTokenService} from '../../services/auth-token.service';

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

  constructor(private authService: AuthService, private route: Router,  private authToken: AuthTokenService) { }

  ngOnInit(): void {
      this.isLoggedIn = this.authToken.getStatus();
  }

  switchSignUp(): void{
    this.route.navigate(['/register']);
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe(
      data => {
        this.authToken.saveSession(data.accessToken);
        this.authToken.saveUser(data);
        this.isLoggedIn = true;
      },
      err => {
        this.errMsg = err.error.message;
        this.isLoggedIn = false;
      }
    );
  }

}
