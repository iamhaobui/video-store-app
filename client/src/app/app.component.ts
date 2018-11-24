import { Component } from '@angular/core';
import { Video, VIDEOS, VIDEO_HEADERS } from './videos';
import { Customer, CUSTOMERS, CUSTOMER_HEADERS } from './customers';

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
}
