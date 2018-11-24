import { Component, OnInit } from '@angular/core';
import { Video, VIDEOS, VIDEO_HEADERS } from '../videos';
import { Customer, CUSTOMERS, CUSTOMER_HEADERS } from '../customers';
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
