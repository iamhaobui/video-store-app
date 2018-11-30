import { Component, OnInit, Input } from '@angular/core';
import { VIDEOS, VIDEO_HEADERS } from 'src/app/videos';
import { DataService } from '../../services/data.service';
import { VideoService} from '../../services/video.service';
import { FlashMessagesService} from 'angular2-flash-messages';
import { Router} from '@angular/router';

@Component({
  selector: 'app-video-list-admin',
  templateUrl: './video-list-admin.component.html',
  styleUrls: ['./video-list-admin.component.css'],
})
export class VideoListAdminComponent implements OnInit {
  videos: Object[] = [];
  video_headers = VIDEO_HEADERS.slice(0);

  searchText: string;
  constructor(private videoService: VideoService,
    private dataService: DataService,
    private flashMessage: FlashMessagesService,
    private router: Router
    ) { }

  ngOnInit() {
    this.video_headers.push('');
    this.video_headers.push('');
    this.dataService.currentText.subscribe(searchText => this.searchText = searchText);
    this.videoService.loadVideos().subscribe(data => {
      for (let key in data.videoMap) {
        this.videos.push(data.videoMap[key]);
      }
    })
  }

  onDelete(i: string) {
    this.videoService.deleteVideo(i).subscribe(deletedVideo => {
      if (deletedVideo !== null) {
        window.location.reload();
        this.flashMessage.show("Successfully deleted the video", {
          cssClass: 'alert-success',
          timeout: 10000
        });
        console.log(deletedVideo)
      } else {
        this.flashMessage.show("Failed to delete the video, please try again another time", {
          cssClass: 'alert-danger',
          timeout: 5000
        });
      }
    })
  }


}
