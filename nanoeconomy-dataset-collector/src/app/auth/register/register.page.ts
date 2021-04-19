import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  userInfo: any = {
    username: null,
    email: null,
    password: null
  };

  isSuccessful = false;
  errMsg: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit(): void {
    const { username, email, password } = this.userInfo;

    this.authService.register(username, email, password).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
      },
      err => {
        this.errMsg = err.error.message;
        console.log(this.errMsg);
        this.isSuccessful = false;
      }
    );
  }

}
