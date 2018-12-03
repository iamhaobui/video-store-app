import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Input() customers;
  @Input() customer_headers;

  searchText: string;

  constructor(
    private dataService: DataService,
  ) { }

  ngOnInit() {
    this.dataService.currentText.subscribe(searchText => this.searchText = searchText);
  }

}
