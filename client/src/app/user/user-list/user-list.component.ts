import { Component, OnInit, Input } from '@angular/core';
import { CUSTOMERS, CUSTOMER_HEADERS } from 'src/app/customers';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Input() customers;
  @Input() customer_headers;
  constructor() { }

  ngOnInit() {
    
  }

}
