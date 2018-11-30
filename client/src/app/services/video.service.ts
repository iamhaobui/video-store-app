import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map, catchError } from 'rxjs/operators';
import { HttpClient} from '@angular/common/http';
import { HttpHeaders} from '@angular/common/http';
import { Video} from '../videos';
import { Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private http: Http,
    private httpClient: HttpClient) { }

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

  deleteVideo(id) {
    let headers = new HttpHeaders;
    headers.append('Content-type', 'application/json');
    return this.httpClient.delete(`http://localhost:3000/videos/delete/${id}`, {headers: headers});
  }







}
