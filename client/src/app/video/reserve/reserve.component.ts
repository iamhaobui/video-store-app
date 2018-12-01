import { Component, OnInit, Input } from '@angular/core';
import { VIDEOS, VIDEO_HEADERS } from 'src/app/videos';
import { Location } from '@angular/common';
import { ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
import { FlashMessagesService} from 'angular2-flash-messages';
import { VideoService} from '../../services/video.service';
import { CustomerService} from '../../services/customer.service';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})
export class ReserveComponent implements OnInit {
  videos = VIDEOS;
  video_headers = VIDEO_HEADERS;
  customers: Object[] = [];

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
    private videoService: VideoService,
    private customerService: CustomerService,
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
      this.customerService.loadCustomers().subscribe(data => { 
        for (let key in data) {
          this.customers.push(data[key]);
        }
      })
  }
  goBack() {
    this.location.back();
  }

  onReserve() {
    const newVideo = {
      title: this.title,
      runningTime: this.runningTime,
      genre: this.genre,
      rating: this.rating,
      director: this.director,
      status: "Unavailable"
    }

    // Update Video
    this.videoService.updateVideo(this.id, newVideo).subscribe(data => {
      if (data != null) {
        this.flashMessage.show('You successfully reserved video', {
          cssClass: 'alert-success',
          timeout: 5000});  
          this.router.navigate(['']);      
          console.log(data);
      } else {
        this.flashMessage.show("Failed to reserved video! Please try again", {
          cssClass: 'alert-danger',
          timeout: 5000});
        }
      });
  }

}
