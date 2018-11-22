import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})
export class ReserveComponent implements OnInit {
  @Input() videos;
  @Input() customers;

  constructor() { }

  ngOnInit() {
  }

}
