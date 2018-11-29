import { Component, OnInit, Input } from '@angular/core';
import { VIDEOS, VIDEO_HEADERS } from 'src/app/videos';
import { CUSTOMERS } from 'src/app/customers';

@Component({
  selector: 'app-video-lists',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})

export class VideoListComponent implements OnInit {
  videos = VIDEOS;
  video_headers = VIDEO_HEADERS.slice(0);
  customers =  CUSTOMERS;

  constructor() { }

  ngOnInit() {
    this.video_headers.push('');
  }

}
