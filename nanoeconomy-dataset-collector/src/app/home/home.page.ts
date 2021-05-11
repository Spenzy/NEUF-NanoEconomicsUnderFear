import {Component} from '@angular/core';
import {AuthTokenService} from '../services/auth-token.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private authToken: AuthTokenService) {}
}
