import { Component, OnInit } from '@angular/core';
import { AuthService} from '../services/auth.service';
import { Router} from '@angular/router';
import { FlashMessagesService} from 'angular2-flash-messages';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String;
  password: String;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onLoginSubmit() {
    const admin = {
      username: this.username,
      password: this.password
    }

    this.authService.authenticateUser(admin).subscribe(data => {
      if (data.success) {
        console.log(data);
        this.authService.storeUserData(data.token, data.admin);
        this.flashMessage.show('You are now logged in', {
          cssClass: 'alert-success',
          timeout: 5000});
        this.router.navigate(['admin/videos']);
      } else {
        this.flashMessage.show(data.msg, {
          cssClass: 'alert-danger',
          timeout: 5000});
          this.router.navigate(['admin/login']);
        }

    });

  }

}
