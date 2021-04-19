import { Component, OnInit } from '@angular/core';
import {AuthTokenService} from '../../services/auth-token.service';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  isLoggedIn: boolean;

  constructor(private authToken: AuthTokenService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authToken.getStatus();
    if (this.isLoggedIn) {
      this.currentUser = this.authToken.getUser();
    }
  }
}
