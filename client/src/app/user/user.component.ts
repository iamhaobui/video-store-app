import { Component, OnInit } from '@angular/core';
import { CUSTOMERS, CUSTOMER_HEADERS } from '../customers';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  customers = CUSTOMERS;
  customer_headers = CUSTOMER_HEADERS;
  constructor() { }

  ngOnInit() {
  }

}
