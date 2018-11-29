import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { VIDEOS, VIDEO_HEADERS } from 'src/app/videos';
import { VideoService} from '../../services/video.service';

@Component({
  selector: 'app-video-list-admin',
  templateUrl: './video-list-admin.component.html',
  styleUrls: ['./video-list-admin.component.css'],
})
export class VideoListAdminComponent implements OnInit {
  videos: Object[] = [];
  video_headers = VIDEO_HEADERS.slice(0);

  constructor(private videoService: VideoService) { }

  ngOnInit() {
    this.video_headers.push('');
    this.video_headers.push('');
    this.videoService.loadVideos().subscribe(data => {
      for (let key in data.videoMap) {
        this.videos.push(data.videoMap[key]);
      }
    })
  }

}
