import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lists',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  @Input() videos;
  @Input() video_headers;
  @Input() customers;

  constructor() { }

  ngOnInit() {
  }

}
