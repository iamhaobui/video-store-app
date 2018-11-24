import { Component, OnInit, Input } from '@angular/core';
import { VIDEO_HEADERS, VIDEOS } from 'src/app/videos';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  videos = VIDEOS;
  video_headers = VIDEO_HEADERS.slice(0);
  constructor() { }

  ngOnInit() {
  }

}
