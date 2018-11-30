import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { HttpClient} from '@angular/common/http';
import { HttpHeaders} from '@angular/common/http';
import { Video} from '../videos';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private http: Http,
    private httpClient: HttpClient) { }

  loadVideos() {
    let headers = new Headers;
    headers.append('Content-type', 'application/json');
    return this.http.get('http://localhost:3000/videos/lists')
      .pipe(map(res => res.json()));
  }

  getVideo(id) {
    console.log(id);
    let headers = new Headers;
    headers.append('Content-type', 'application/json');
    return this.http.get(`http://localhost:3000/videos/get/${id}`)
      .pipe(map(res => res.json()));
  }

  updateVideo(id, video: Video): Observable<Video> {
    let headers = new HttpHeaders;
    headers.append('Content-type', 'application/json');
    return this.httpClient.put<Video>(`http://localhost:3000/videos/update/${id}`, video, {
            headers: headers});
  }







}
