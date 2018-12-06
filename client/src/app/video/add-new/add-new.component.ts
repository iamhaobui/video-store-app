import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { VideoService } from '../../services/video.service';
import { FlashMessagesService} from 'angular2-flash-messages';
import { FormGroup, FormBuilder,Validators} from '@angular/forms';

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

  videoForm: FormGroup;

  constructor(
    private router: Router,
    private location: Location,
    private videoService: VideoService,
    private flashMessage: FlashMessagesService,
    private formBuilder: FormBuilder

  ) { }

  ngOnInit() {
    this.videoForm = this.formBuilder.group({
      title: ['', Validators.required],
      runningTime: [''],
      genre: ['', Validators.required],
      rating: [''],
      status: ['', Validators.required],
      director: [''],
    })
  }
  goBack() {
    this.location.back();
  }
  addVideo() {
    console.log(this.videoForm.get('rating').value, this.videoForm.get('genre').value);
    const video = {
      title: this.videoForm.get('title').value,
      runningTime: this.videoForm.get('runningTime').value,
      genre: this.videoForm.get('genre').value,
      rating: this.videoForm.get('rating').value,
      status: this.videoForm.get('status').value,
      director: this.videoForm.get('director').value
    };
    console.log(video.rating);

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