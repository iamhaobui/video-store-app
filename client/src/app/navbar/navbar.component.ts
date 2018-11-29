import { Component, OnInit } from '@angular/core';
import { AdminLoginService } from '../services/admin-login.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  token: any;
  username: string;

  constructor(
    private adminLoginService: AdminLoginService,
    private router: Router,
    private location: Location,
  ) { }

  onLogout() {
    this.adminLoginService.logoutAdmin();
    this.router.navigate(['/']);
    this.ngOnInit();
  }
  ngOnInit() {
    this.token = localStorage.getItem('id_token');
    this.username = JSON.parse(localStorage.getItem('user')).name;
  }
  onLogin() {
    this.router.navigate(['/admin/login']);
  }
  onRegister() {
    this.adminLoginService.logoutAdmin();
    this.router.navigate(['/']);
  }
  isLoggedIn() {
    if (this.token == null) {
      return false;
    } else {
      return true;
    }
  }

}
