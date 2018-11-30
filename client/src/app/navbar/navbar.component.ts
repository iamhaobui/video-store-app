import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthService} from '../services/auth.service';
import { FlashMessagesService} from 'angular2-flash-messages';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() outputSearchText = new EventEmitter<string>();

  searchText: string;
  token: any;
  username: string;

  constructor(
      public authService: AuthService,
      private router: Router,
      private flashMessage: FlashMessagesService,
      private dataService: DataService,
    ) {}

  onLogoutClick() {
    this.authService.logout();
    this.flashMessage.show('You are logged out', {
      cssClass: 'alert-success',
      timeout: 3000
    });
    this.router.navigate(['/admin/login']);
    return false;
  }
  ngOnInit() {
    this.token = localStorage.getItem('id_token');
    let admin:any = JSON.parse(localStorage.getItem('admin'));
    this.username = admin != null? admin.username : "";
    this.dataService.currentText.subscribe(searchText => this.searchText = searchText);
  }
  onLogin() {
    this.router.navigate(['/admin/login']);
  }

  isLoggedIn() {
    if (this.token == null) {
      return false;
    } else {
      return true;
    }
  }
  onKey(event: any) {
    this.dataService.changeText(event.target.value);
  }

}
