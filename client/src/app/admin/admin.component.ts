import { Component, OnInit } from '@angular/core';
import { Video, VIDEOS, VIDEO_HEADERS } from '../videos';
import { Customer, CUSTOMERS, CUSTOMER_HEADERS } from '../customers';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  videos = VIDEOS;
  video_headers = VIDEO_HEADERS;

  constructor() { }

  ngOnInit() {
  }

}
