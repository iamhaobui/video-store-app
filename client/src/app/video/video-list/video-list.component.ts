import { Component, OnInit, Input } from '@angular/core';
import { VIDEOS, VIDEO_HEADERS } from 'src/app/videos';
import { CUSTOMERS } from 'src/app/customers';
import { VideoService} from '../../services/video.service';
<<<<<<< HEAD
import { DataService } from '../../services/data.service';
=======
>>>>>>> master

@Component({
  selector: 'app-video-lists',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})

export class VideoListComponent implements OnInit {
<<<<<<< HEAD
  @Input() text;
=======
>>>>>>> master
  video_headers = ['Title', 'Running Time', 'Genre', 'Rating', 'Director', 'Status'];
  customers =  CUSTOMERS;
  searchText: string;

  constructor(
<<<<<<< HEAD
    private videoService: VideoService,
    private dataService: DataService,
=======
    private videoService: VideoService
>>>>>>> master
  ) { }

  videos: Object[] = [];

  ngOnInit() {
    this.video_headers.push('');
    this.videoService.loadVideos().subscribe(videoMap => {
<<<<<<< HEAD
      for (let key in videoMap.videoMap) { 
        this.videos.push(videoMap.videoMap[key]);
        }
    });
    this.dataService.currentText.subscribe(searchText => this.searchText = searchText);
=======
      for (let key in videoMap.videoMap) {
          this.videos.push(videoMap.videoMap[key]);
      } 
    })

  }


  onLoad() {

    
>>>>>>> master
  }


  onLoad() { }

}
