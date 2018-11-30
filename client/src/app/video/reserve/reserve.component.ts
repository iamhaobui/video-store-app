import { Component, OnInit, Input } from '@angular/core';
import { VIDEOS, VIDEO_HEADERS } from 'src/app/videos';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})
export class ReserveComponent implements OnInit {
  videos = VIDEOS;
  video_headers = VIDEO_HEADERS;

  title: string;
  runningTime: string;
  genre: string;
  rating: string;
  director: string;
  status: string; 

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
