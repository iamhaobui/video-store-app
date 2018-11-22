import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-video-list-admin',
  templateUrl: './video-list-admin.component.html',
  styleUrls: ['./video-list-admin.component.css'],
})
export class VideoListAdminComponent implements OnInit {
  @Input() videos;
  @Input() video_headers;

  constructor() { }

  ngOnInit() {
    this.video_headers.push("");
    this.video_headers.push("");
  }

}
