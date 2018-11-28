import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private http: Http) { }

  loadVideos() {
    let headers = new Headers;
    headers.append('Content-type', 'application/json');
    return this.http.get('http://localhost:3000/videos/lists')
      .pipe(map(res => res.json()));
  }


}
