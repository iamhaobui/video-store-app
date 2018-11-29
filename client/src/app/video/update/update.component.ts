import { Component, OnInit, Input } from '@angular/core';
import { VIDEO_HEADERS, VIDEOS } from 'src/app/videos';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  videos = VIDEOS;
  video_headers = VIDEO_HEADERS.slice(0);
  constructor(
    private router: Router,
    private location: Location,
  ) { }

  ngOnInit() {
  }
  goBack() {
    this.location.back();
  }

}
