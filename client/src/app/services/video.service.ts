import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { Observable, throwError } from 'rxjs';
import {map, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private http: Http) { }

  addVideo(video: any) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/videos/add', video, {headers: headers})
            .pipe(
              map(res => res.json()),
              catchError(err => throwError(err))
            );
  }
  loadVideos() {
    const headers = new Headers;
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/videos/lists')
      .pipe(map(res => res.json()));
  }


}
