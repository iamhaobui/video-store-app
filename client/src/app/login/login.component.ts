import { Component, OnInit } from '@angular/core';
import { AdminLoginService } from '../services/admin-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  token: any;
  constructor(
    private adminLoginService: AdminLoginService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.token = localStorage.getItem('id_token');
  }

  onLogin() {
    const user = {
      username: this.username,
      password: this.password
    };
    this.adminLoginService.authenticateAdmin(user).subscribe(data => {
      if (data.success) {
        this.adminLoginService.storeAdminData(data.token, data.admin);
        this.router.navigate(['admin/videos']);
      } else {
        this.router.navigate(['admin/login']);
      }
    });
  }

}
