import { Component, OnInit, Input } from '@angular/core';
import { VIDEO_HEADERS, VIDEOS } from 'src/app/videos';
import { Video} from '../../videos';
import { VideoService} from '../../services/video.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  videos = VIDEOS;
  video_headers = VIDEO_HEADERS.slice(0);

  title: string;
  runningTime: string;
  genre: string;
  rating: string;
  director: string;
  status: string; 

  private id = this.route.snapshot.paramMap.get('id');


  private  video: Video;

  constructor(
    private videoService: VideoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getVideo();
    console.log(this.id);
    console.log(this.video);
  }

  getVideo(): void {
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

  onUpdateSubmit() {
    const newVideo = {
      title: this.title,
      runningTime: this.runningTime,
      genre: this.genre,
      rating: this.rating,
      director: this.director,
      status: this.status 
    }

    // Update Video
    this.videoService.updateVideo(this.id, newVideo).subscribe(data => {
      console.log(data);
      
    });
  }

}
