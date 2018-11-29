import { Component, OnInit } from '@angular/core';
import { AdminLoginService } from '../services/admin-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  constructor(private adminLoginService: AdminLoginService) { }

  ngOnInit() {
  }

  onLogin() {
    const user = {
      username: this.username,
      password: this.password
    };
    this.adminLoginService.authenticateAdmin(user).subscribe(data => console.log(data));
  }

}
