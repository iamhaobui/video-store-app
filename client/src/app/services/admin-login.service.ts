import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable, throwError } from 'rxjs';
import {map, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AdminLoginService {
  authToken: any;
  user: any;
  constructor(private http: Http) { }
  authenticateAdmin(user) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/admins/authenticate', user, {headers: headers})
            .pipe(
              map(res => res.json()),
              catchError(err => throwError(err))
            );
  }
  storeAdminData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }
  logoutAdmin() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
