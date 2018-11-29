import { Component, OnInit, Input } from '@angular/core';
import { VIDEOS, VIDEO_HEADERS } from 'src/app/videos';
import { CUSTOMERS } from 'src/app/customers';
import { VideoService} from '../../services/video.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-video-lists',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})

export class VideoListComponent implements OnInit {
  @Input() text;
  video_headers = ['Title', 'Running Time', 'Genre', 'Rating', 'Director', 'Status'];
  customers =  CUSTOMERS;
  searchText: string;

  constructor(
    private videoService: VideoService,
    private dataService: DataService,
  ) { }

  videos: Object[] = [];

  ngOnInit() {
    this.video_headers.push('');
    this.videoService.loadVideos().subscribe(videoMap => {
      for (let key in videoMap.videoMap) { 
        this.videos.push(videoMap.videoMap[key]);
        }
    });
    this.dataService.currentText.subscribe(searchText => this.searchText = searchText);
  }


  onLoad() { }

}
