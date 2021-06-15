import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

// service imports
import {AuthService} from '../../../services/auth.service';
import {AuthTokenService} from '../../../services/auth-token.service';

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
  hide = true;

  constructor(private router: Router, private authService: AuthService, private authToken: AuthTokenService) { }

  ngOnInit(): void {
      this.authToken.loadSession().then(err => console.log(err));
      this.isLoggedIn = this.authToken.getStatus();
      if (this.isLoggedIn){
        this.router.navigate(['dass21']).then(err => console.log(err));
      }
  }

  onSubmit(): void {
    const { username, password } = this.form;
    this.authService.login(username, password).subscribe(
      data => {
        this.authToken.saveSession(data.token).then(err => console.log(err));
        this.authService.saveUser(data);
        this.router.navigate(['dass21']).then(err => console.log(err));
      },
      err => {
        this.errMsg = err.status + ' : ' + err.error.msg;
        console.log(err);
      }
    );
  }

}
