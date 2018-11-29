import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private searchText = new BehaviorSubject<string>('');
  currentText = this.searchText.asObservable();
  constructor() { }
  changeText(text: string) {
    this.searchText.next(text);
  }
}
