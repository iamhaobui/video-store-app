import { Component, OnInit, Input } from '@angular/core';
import { VIDEOS, VIDEO_HEADERS } from 'src/app/videos';
import { Location } from '@angular/common';
import { ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
import { FlashMessagesService} from 'angular2-flash-messages';
import { VideoService} from '../../services/video.service';


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

  private id = this.route.snapshot.paramMap.get('id');


 constructor(
    private router: Router,
    private location: Location,
    private route: ActivatedRoute, 
    private flashMessage: FlashMessagesService,
    private videoService: VideoService
  ) { }

  ngOnInit() {
    this.videoService.getVideo(this.id)
      .subscribe(video => {
        console.log(video);
        this.title = video.title;
        this.runningTime = video.runningTime;
        this.genre = video.genre;
        this.rating = video.rating;
        this.director = video.director;
        this.status = video.status;
      }
      )
  }
  goBack() {
    this.location.back();
  }

}
