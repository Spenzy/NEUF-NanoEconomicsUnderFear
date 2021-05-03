import { Component, OnInit } from '@angular/core';
import { Router,  } from '@angular/router';

// service imports
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

  constructor(private router: Router, private authService: AuthService, private authToken: AuthTokenService) { }

  ngOnInit(): void {
      if (this.authToken.getStatus()){
        this.router.navigate(['home']).then(err => console.log(err));
      }
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe(
      data => {
        this.authToken.saveSession(data.accessToken);
        this.authToken.saveUser(data);
        this.authToken.loadSession();
      },
      err => {
        this.errMsg = err.status + ' : ' + err.message;
        console.log(err);
      }
    );
  }

}
