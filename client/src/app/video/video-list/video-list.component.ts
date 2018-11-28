import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { VIDEOS, VIDEO_HEADERS } from 'src/app/videos';
import { CUSTOMERS } from 'src/app/customers';
import { VideoService} from '../../services/video.service';

@Component({
  selector: 'app-video-lists',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
  encapsulation: ViewEncapsulation.Native,
})

export class VideoListComponent implements OnInit {
  video_headers = ['Title', 'Running Time', 'Genre', 'Rating', 'Director', 'Status'];
  customers =  CUSTOMERS;

  constructor(
    private videoService: VideoService
  ) { }

  videos: Object[] = [];

  ngOnInit() {
    this.video_headers.push('');
    this.videoService.loadVideos().subscribe(videoMap => {
      for (let key in videoMap.videoMap) {
          this.videos.push(videoMap.videoMap[key]);
      } 
    })

  }


  onLoad() {

    
  }

}
