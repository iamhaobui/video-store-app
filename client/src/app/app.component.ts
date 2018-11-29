import { Component, OnInit } from '@angular/core';
import { Video, VIDEOS, VIDEO_HEADERS } from './videos';
import { Customer, CUSTOMERS, CUSTOMER_HEADERS } from './customers';
import { AuthService} from './services/auth.service';
import { Router} from '@angular/router';
import { FlashMessagesService} from 'angular2-flash-messages';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  videos = VIDEOS;
  video_headers = VIDEO_HEADERS;

  customers = CUSTOMERS;
  customer_header = CUSTOMER_HEADERS;

  constructor(
    public authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) {}

  onLogoutClick() {
    this.authService.logout();
    this.flashMessage.show('You are logged out', {
      cssClass: 'alert-success',
      timeout: 3000
    });
    this.router.navigate(['/admin/login']);
    return false;
  }
}
