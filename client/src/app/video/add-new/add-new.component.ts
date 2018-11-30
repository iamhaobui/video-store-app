import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { VideoService } from '../../services/video.service';
import { FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent implements OnInit {
  title: string;
  runningTime: string;
  genre: string;
  rating: string;
  status: string;
  director: string;

  constructor(
    private router: Router,
    private location: Location,
    private videoService: VideoService,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
  }
  goBack() {
    this.location.back();
  }
  addVideo() {
    const video = {
      title: this.title,
      runningTime: this.runningTime,
      genre: this.genre,
      rating: this.rating,
      status: this.status,
      director: this.director
    };
    this.videoService.addVideo(video).subscribe(data => {
      if (data.success) {
        this.flashMessage.show("Successfully added new Video", {
          cssClass: "alert-success",
          timeout: 5000
        });
        this.router.navigate(['admin/videos']);
        console.log(data);
      } else {
        this.flashMessage.show("Failed to added new Video, please try again", {
          cssClass: "alert-danger",
          timeout: 5000
        });
      }
    });
  }

}
