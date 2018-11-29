import { Component, OnInit, Input } from '@angular/core';
import { VIDEOS, VIDEO_HEADERS } from 'src/app/videos';

@Component({
  selector: 'app-video-list-admin',
  templateUrl: './video-list-admin.component.html',
  styleUrls: ['./video-list-admin.component.css'],
})
export class VideoListAdminComponent implements OnInit {
  videos = VIDEOS;
  video_headers = VIDEO_HEADERS.slice(0);

  constructor() { }

  ngOnInit() {
    this.video_headers.push('');
    this.video_headers.push('');
  }

}
